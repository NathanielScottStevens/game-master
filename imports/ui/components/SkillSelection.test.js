import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import SkillSelection from './SkillSelection.jsx';
import CheckListCard from './CheckListCard.jsx';

describe('SkillSelection', function() {
  let characterSkills = {
    boating: 1,
    climbing: 2,
  };
  let skills = [
    {name: "boating",       attribute: "agility"},
    {name: "climbing",      attribute: "strength"},
    {name: "gambling",      attribute: "smarts"},
    {name: "intimidation",  attribute: "spirit"}
  ];

  let onChange = sinon.spy();

  let skillSelection;

  function render(){
    skillSelection = shallow(
      <SkillSelection
        skills={skills}
        characterSkills={characterSkills}
        onChange={onChange}
      />);
  };

  function checkForSkill(attribute, skill){
    let strengthChecklistCard = skillSelection.find({label: attribute});
    let items = strengthChecklistCard.prop('items');

    expect(items).to.have.a.lengthOf(1);
    expect(items[0].label).to.be.equal(skill);
  }

  describe('Rendering', function() {
    render();

    it('shows CheckListCards for each attribute', function() {
      expect(skillSelection.find(CheckListCard)).to.have.a.lengthOf(4);
    });

    it('shows strength skills under Strength', function() {
      checkForSkill('strength', 'climbing');
    });

    it('shows agility skills under Agility', function() {
      checkForSkill('agility', 'boating');
    });

    it('shows smarts skills under Smarts', function() {
      checkForSkill('smarts', 'gambling');
    });

    it('shows spirit skills under Spirit', function() {
      checkForSkill('spirit', 'intimidation');
    });

    it('shows correct default value for each skill', function() {
      let climbing = skillSelection.find({label: 'strength'}).prop('items')[0].value;
      let gambling = skillSelection.find({label: 'smarts'}).prop('items')[0].value;

      expect(climbing).to.be.true;
      expect(gambling).to.be.false;
    })
  });

  describe('Actions', function() {
    render();

    it('calls onChange with correct args', function() {
      skillSelection.find({label: 'strength'}).prop('onChange')('climbing');

      expect(onChange).to.have.been.called;
      expect(onChange.args[0]).to.have.members(['climbing']);
    });
  });
});
