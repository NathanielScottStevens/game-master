import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';
import { describe, it, context, beforeEach } from 'meteor/practicalmeteor:mocha';

import CheckBox from './CheckBox.jsx';

let checkBox;
const id = 'id1';
const onChange = sinon.spy();
const parentClass = 'test-class';

function render(label, value) {
  checkBox = shallow(
    <CheckBox
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      parentClass={parentClass}
    />
  );
}

describe('CheckBox', function () {
  describe('Rendering', function () {
    it('should display a label', function () {
      render('Fighting');
      expect(checkBox.find('label').text()).to.contain('Fighting');
    });

    it('should add class', function () {
      render('Fighting');
      expect(checkBox.hasClass(parentClass)).to.be.true;
    });

    context('When initialValue is true', function () {
      it('should display as checked', function () {
        render('Fighting', true);
        expect(checkBox.find('[checked]').prop('checked')).to.be.true;
      });
    });

    context('When initialValue is false', function () {
      it('should not display as checked', function () {
        render('Fighting', false);
        expect(checkBox.find('[checked]').prop('checked')).to.be.false;
      });
    });
  });

  describe('Action', function () {
    beforeEach(function () {
      onChange.reset();
      render('Fighting', true);
      checkBox.find('input').simulate('click');
    });

    it('should call onChange', function () {
      expect(onChange).to.be.called;
    });

    it('should call onChange with id', function () {
      expect(onChange).to.be.calledWith(id);
    });
  });
});
