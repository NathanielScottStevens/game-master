import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'meteor/practicalmeteor:chai';
import { describe, context, it, beforeEach, before } from 'meteor/practicalmeteor:mocha';

import CharacterCreation from './CharacterCreation.jsx';
import BreadCrumb from '../components/BreadCrumb.jsx';
import SkillSelection from '../components/SkillSelection.jsx';
import StatList from '../components/StatList.jsx';
import { Characters } from '../../api/characters/characters.js';
import { skills } from '../../api/skills/fixtures.js';

describe('CharacterCreation', function () {
  let component;

  function render(character) {
    component = shallow(<CharacterCreation character={character} skills={skills} />);
  }

  describe('State', function () {
    context('when initializing', function () {
      render(Factory.create('character'));

      it('should set step to 0', function () {
        expect(component.state('step')).to.equal(0);
      });
    });
  });

  describe('Rendering', function () {
    render(Factory.create('character'));

    it('should show a BreadCrumb component', function () {
      expect(component.find(BreadCrumb)).to.have.a.lengthOf(1);
    });
  });

  describe('Step 1 - Skill Selection', function () {
    let character;
    const characterSkills = { presentSkill: 1 };
    beforeEach(function () {
      character = Factory.create('character', { skills: characterSkills });
      render(character);
    });

    it('should show SkillSelection component', function () {
      expect(component.find(SkillSelection)).to.have.a.lengthOf(1);
    });

    it('should pass character skills to SkillSelection component', function () {
      const skillSelection = component.find(SkillSelection).first();
      const actual = skillSelection.prop('characterSkills');

      expect(actual).to.deep.equal(characterSkills);
    });

    it('should pass skills to SkillSelection component', function () {
      const skillSelection = component.find(SkillSelection).first();
      const actual = skillSelection.prop('skills');

      expect(actual).to.deep.equal(skills);
    });

    context('when SkillSelection calls onChange', function () {
      context('with a skill present', function () {
        it('should remove that skill', function () {
          const skillSelection = component.find(SkillSelection).first();
          skillSelection.prop('onChange')('presentSkill');

          const actual = Characters.findOne(character._id).skills.presentSkill;
          expect(actual).to.not.exist;
        });
      });

      context('with a skill not present', function () {
        it('should add that skill', function () {
          const skillSelection = component.find(SkillSelection).first();
          skillSelection.prop('onChange')('notPresentSkill');

          const actual = Characters.findOne(character._id).skills.notPresentSkill;
          expect(actual).to.exist;
        });
      });
    });
  });

  describe('Step 2 - Attributes', function () {
    let character;

    beforeEach(function () {
      character = Factory.create('character', { attributes: { strength: 1 } });
      render(character);
      component.setState({ step: 1 });
    });

    it('should show StatList component', function () {
      expect(component.find(StatList)).to.have.a.lengthOf(1);
    });

    it('should pass "Attributes" for the StatList label', function () {
      const statList = component.find(StatList).first();
      const actual = statList.prop('label');
      expect(actual).to.equal('Attributes');
    });

    it('should pass attributes for the StatList items', function () {
      const statList = component.find(StatList).first();
      const actual = statList.prop('items');
      expect(actual).to.be.deep.equal(character.attributes);
    });

    context('when StatList calls onChange', function () {
      const expected = 5;

      beforeEach(function () {
        const statList = component.find(StatList).first();
        statList.prop('onChange')('strength', expected);
      });

      it('should update character attribute', function () {
        const actual = Characters.findOne(character._id).attributes.strength;
        expect(actual).to.equal(expected);
      });
    });
  });

  describe('Step 3 - Skills', function () {
    let character;

    beforeEach(function () {
      character = Factory.create('character', { skills: { climbing: 1 } });
      render(character);
      component.setState({ step: 2 });
    });

    it('should show StatList component', function () {
      expect(component.find(StatList)).to.have.a.lengthOf(1);
    });

    it('should pass "Skills" for the StatList label', function () {
      const statList = component.find(StatList).first();
      const actual = statList.prop('label');
      expect(actual).to.equal('Skills');
    });

    it('should pass skills for the StatList items', function () {
      const statList = component.find(StatList).first();
      const actual = statList.prop('items');
      expect(actual).to.be.deep.equal(character.skills);
    });

    context('when StatList calls onChange', function () {
      const expected = 5;

      beforeEach(function () {
        const statList = component.find(StatList).first();
        statList.prop('onChange')('climbing', expected);
      });

      it('should update character attribute', function () {
        const actual = Characters.findOne(character._id).skills.climbing;
        expect(actual).to.equal(expected);
      });
    });
  });

  describe('Spending Points', function () {
    context('when initializing', function () {
      before(function () {
        render(Factory.create('character', { skills: {} }));
      });

      it('should set attribute points to 5', function () {
        const actual = component.find('[dataId="attribute-point-box"]').prop('points');
        expect(actual).to.equal(5);
      });

      it('should set skill points to 15', function () {
        const actual = component.find('[dataId="skill-point-box"]').prop('points');
        expect(actual).to.equal(15);
      });
    });

    context('when adding a skill', function () {
      it('should remove one skill point', function () {
        const character = Factory.create('character', { skills: {} });
        render(character);

        const skillSelection = component.find(SkillSelection).first();
        skillSelection.prop('onChange')('climbing');

        const actual = component.find('[dataId="skill-point-box"]').prop('points');
        expect(actual).to.equal(14);
      });
    });

    context('when removing a skill', function () {
      it('should add one skill point', function () {
        const character = Factory.create('character', { skills: { climbing: 1 } });
        render(character);

        const skillSelection = component.find(SkillSelection).first();
        skillSelection.prop('onChange')('climbing');

        const actual = component.find('[dataId="skill-point-box"]').prop('points');
        expect(actual).to.equal(16);
      });
    });

    context('when increasing a skill up to governing attribute', function () {
      it('should remove one skill point per die increase', function () {
        const skill = skills.find(s => s.attribute === 'smarts');
        const character = Factory.create('character', {
          attributes: { smarts: 5 }, skills: { [skill]: 1 } });
        render(character);

        component.setState({ step: 2 });

        const statList = component.find(StatList).first();
        statList.prop('onChange')(skill, 5);

        const actual = component.find('[dataId="skill-point-box').prop('points');
        expect(actual).to.equal(11);
      });
    });

    context('when increasing a skill past governing attribute', function () {
      it('should remove one skill point per die increase', function () {
        const skill = skills.find(s => s.attribute === 'smarts');
        const character = Factory.create('character', {
          attributes: { smarts: 3 }, skills: { [skill]: 3 } });
        render(character);

        component.setState({ step: 2 });

        const statList = component.find(StatList).first();
        statList.prop('onChange')(skill, 4);

        const actual = component.find('[dataId="skill-point-box"]').prop('points');
        expect(actual).to.equal(13);
      });
    });
  });
});
