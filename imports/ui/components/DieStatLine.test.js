import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';
import { describe, it, context, beforeEach } from 'meteor/practicalmeteor:mocha';

import DieStatLine from './DieStatLine.jsx';

describe('DieStatLine', function () {
  const label = 'Strength';
  const field = 'strength';
  const valueForD8 = 3;

  const onChange = sinon.spy();
  let buttons;
  let dieStatLine;

  function render() {
    dieStatLine = shallow(
      <DieStatLine
        label={label}
        field={field}
        value={valueForD8}
        onChange={onChange}
      />);

    buttons = dieStatLine.find('button');
    buttons = {
      d4: buttons.at(0),
      d6: buttons.at(1),
      d8: buttons.at(2),
      d10: buttons.at(3),
      d12: buttons.at(4),
    };
  }

  describe('Rendering', function () {
    render();

    it('should show five buttons', function () {
      expect(dieStatLine.find('button')).to.have.a.lengthOf(5);
    });

    it('should show the label', function () {
      expect(dieStatLine.find('label').text()).to.contain('Strength');
    });

    it('should show die values on buttons', function () {
      expect(buttons.d4.text()).to.contain('4');
      expect(buttons.d6.text()).to.contain('6');
      expect(buttons.d8.text()).to.contain('8');
      expect(buttons.d10.text()).to.contain('10');
      expect(buttons.d12.text()).to.contain('12');
    });

    it('should assign .active to active button', function () {
      expect(buttons.d8.hasClass('active')).to.be.true;
    });
  });

  describe('Action', function () {
    context('When an unselected button is clicked', function () {
      beforeEach(function () {
        onChange.reset();
        render();
        buttons.d12.simulate('click');
      });

      it('should call action with correct args', function () {
        buttons.d12.simulate('click');
        expect(onChange).to.be.calledWith(field, 5);
      });
    });

    context('When the selected button is clicked', function () {
      beforeEach(function () {
        onChange.reset();
        render();
        buttons.d8.simulate('click');
      });

      it('should call action with value of 0', function () {
        expect(onChange).to.be.calledWith(field, 0);
      });
    });
  });
});
