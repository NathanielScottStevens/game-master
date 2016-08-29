import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import SkillSelection from './SkillSelection.jsx';
import CheckListCard from './CheckListCard.jsx';

describe('SkillSelection', function() {
  let characterSkills = {
    fighting: 1,
    throwing: 2,
    notice: 1,
    repair: 3
  };
  let onChange = sinon.spy();

  let skillSelection;

  function render(){
    skillSelection = shallow(
      <SkillSelection
        characterSkills={characterSkills}
        onChange={onChange}
      />);
  };

  describe('Rendering', function() {
    render();

    it('shows CheckListCards for each attribute', function() {
      expect(skillSelection.find(CheckListCard)).to.have.a.lengthOf(4);
    });
  });
});
