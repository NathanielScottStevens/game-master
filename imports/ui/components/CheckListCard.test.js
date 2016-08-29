import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import CheckListCard from './CheckListCard.jsx';
import CheckBox from './CheckBox.jsx';

describe('CheckListCard', function() {
  let label = 'Agility';
  let items = [
    {id: '1', label: 'Fighting', value: true},
    {id: '2', label: 'Throwing', value: false},
    {id: '3', label: 'Shooting', value: true}
  ];
  let onChange = sinon.spy();

  let checkListCard;

  function render(){
    checkListCard = shallow(
      <CheckListCard
        label={label}
        items={items}
        onChange={onChange}
      />
    );
  }

  describe('Rendering', function() {
    render();

    it('shows a label', function() {
      expect(checkListCard.find('h4').text()).to.contain(label);
    });

    it('shows all items', function() {
      expect(checkListCard.find(CheckBox)).to.have.a.lengthOf(items.length);
    });
  });

  describe('Actions', function() {
    render();

    it('calls onChange with correct args', function() {
      checkListCard.find(CheckBox).first().prop('onChange')('1');
      expect(onChange).to.have.been.called;
      expect(onChange).to.have.been.calledWith('1');
    });

  });

});
