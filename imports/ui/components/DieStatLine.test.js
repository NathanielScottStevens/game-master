import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import DieStatLine from './DieStatLine.jsx';

describe('DieStatLine', () => {
  const label = "Strength";
  const field = "strength";
  const valueForD8 = 3;

  let action = sinon.spy();
  let buttons;
  let dieStatLine;

  function render(){
    dieStatLine = shallow(<DieStatLine label={label} field={field} value={valueForD8} action={action} />);

    buttons = dieStatLine.find('button');
    buttons = {
      d4: buttons.at(0),
      d6: buttons.at(1),
      d8: buttons.at(2),
      d10: buttons.at(3),
      d12: buttons.at(4)
    };
  };

  describe('Rendering', () => {
    render();

    it('should show five buttons', () => {
      expect(dieStatLine.find('button')).to.have.a.lengthOf(5);
    });

    it('should show the label', () => {
      expect(dieStatLine.find('label').text()).to.contain('Strength');
    });

    it('should assign .stat-button-active to button at value', () => {
      expect(buttons.d8.hasClass('stat-button-active')).to.be.true;
    });

    it('should assign .stat-button-active to all buttons below value', () => {
      expect(buttons.d4.hasClass('stat-button-active')).to.be.true;
      expect(buttons.d6.hasClass('stat-button-active')).to.be.true;
    });

    it('should not assign .stat-button-active to all buttons above value', () => {
      expect(buttons.d10.hasClass('stat-button-active')).to.be.false;
      expect(buttons.d12.hasClass('stat-button-active')).to.be.false;
    });
  });

  describe('Action', () => {
    context('When an unselected button is clicked', () => {
      beforeEach(() => {
        action.reset();
        render();
        buttons.d12.simulate('click');
      });

      it('should call action with correct args', () => {
        buttons.d12.simulate('click');
        expect(action).to.be.calledWith(field, 5);
      });
    });

    context('When the selected button is clicked', () => {
      beforeEach(() => {
        action.reset();
        render();
        buttons.d8.simulate('click');
      });

      it('should call action with value of 0', () => {
        expect(action).to.be.calledWith(field, 0);
      });
    });

  })
});
