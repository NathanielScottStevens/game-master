import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import CheckBox from './CheckBox.jsx';

let checkBox;
let id = 'id1'
let onChange = sinon.spy();

function render(label, value){
  checkBox = shallow(
    <CheckBox
      id={id}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}

describe('CheckBox', () => {

  describe('Rendering', () => {

    it('should display a label', () => {
      render('Fighting');
      expect(checkBox.find('label').text()).to.contain('Fighting');
    });

    context('When initialValue is true', () => {
      it('should display as checked', () => {
        render('Fighting', true);
        expect(checkBox.find('[checked]').prop('checked')).to.be.true;
      });
    });

    context('When initialValue is false', () => {
      it('should not display as checked', () => {
        render('Fighting', false);
        expect(checkBox.find('[checked]').prop('checked')).to.be.false;
      });
    });
  });

  describe('Action', () => {
    beforeEach(() => {
      onChange.reset();
      render('Fighting', true);
      checkBox.find('input').simulate('click');
    })

    it('should call onChange', () => {
      expect(onChange).to.be.called;
    });

    it('should call onChange with id', () => {
      expect(onChange).to.be.calledWith(id);
    })
  })
});
