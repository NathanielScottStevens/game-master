import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import CharacterCreation from './CharacterCreation.jsx';
import BreadCrumb from '../components/BreadCrumb.jsx';
import SkillSelection from '../components/SkillSelection.jsx';
import StatList from '../components/StatList.jsx';
import { Characters } from '../../api/characters/characters.js';

describe('CharacterCreation', function() {

  let component;

  function render(character) {
    component = shallow(<CharacterCreation character={character} />);
  }

  describe('State', function(){
    context('when initializing', function() {
      render(Factory.create('character'));

      it('should set step to 0', function() {
          expect(component.state('step')).to.equal(0);
      });
    });
  });

  describe('Rendering', function() {
    render(Factory.create('character'));

    it('should show a BreadCrumb component', function() {
      expect(component.find(BreadCrumb)).to.have.a.lengthOf(1);
    });
  });

  describe('Step 1', function() {
    let character;

    beforeEach(function() {
      character = Factory.create('character', { skills: { presentSkill : 1 }});
      render(character);
    });

    it('should show SkillSelection component', function() {
      expect(component.find(SkillSelection)).to.have.a.lengthOf(1);
    });

    context('when SkillSelection calls onChange', function() {
      context('with a skill present', function() {
        it('should remove that skill', function() {
          let skillSelection = component.find(SkillSelection).first();
          skillSelection.prop('onChange')('presentSkill');

          let actual =  Characters.findOne(character._id).skills.presentSkill;
          expect(actual).to.not.exist;
        });
      });

      context('with a skill not present', function() {
        it('should add that skill', function() {
          let skillSelection = component.find(SkillSelection).first();
          skillSelection.prop('onChange')('notPresentSkill');

          let actual =  Characters.findOne(character._id).skills.notPresentSkill;
          expect(actual).to.exist;
        });
      });
    })
  });

  describe('Step 2', function() {
    let character = Factory.create('character');

    beforeEach(function() {
      render(character);
      component.setState({ step: 1 });
    });

    it('should show StatList component', function() {
      expect(component.find(StatList)).to.have.a.lengthOf(1);
    });

    it('should pass "Attributes" for the StatList label', function() {
      let statList = component.find(StatList).first()
      let actual = statList.prop('label');
      expect(actual).to.equal('Attributes');
    });

    it('should pass attributes for the StatList items', function() {
      let statList = component.find(StatList).first()
      let actual = statList.prop('items');
      expect(actual).to.be.deep.equal(character.attributes);
    });
  });

  describe('Step 3', function() {
    let character = Factory.create('character');

    beforeEach(function() {
      render(character);
      component.setState({ step: 2 });
    });

    it('should show StatList component', function() {
      expect(component.find(StatList)).to.have.a.lengthOf(1);
    });

    it('should pass "Skills" for the StatList label', function() {
      let statList = component.find(StatList).first();
      let actual = statList.prop('label');
      expect(actual).to.equal('Skills');
    });

    it('should pass skills for the StatList items', function() {
      let statList = component.find(StatList).first()
      let actual = statList.prop('items');
      expect(actual).to.be.deep.equal(character.skills);
    });
  });

});
