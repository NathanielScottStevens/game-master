import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';
import { describe, it, beforeEach } from 'meteor/practicalmeteor:mocha';

import BreadCrumb from './BreadCrumb.jsx';

describe('BreadCrumb', function () {
  const list = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  const selected = 2;
  const onChange = sinon.spy();

  let breadCrumb;

  function render() {
    onChange.reset();

    breadCrumb = shallow(
      <BreadCrumb
        list={list}
        selected={selected}
        onChange={onChange}
      />
    );
  }

  describe('Rendering', function () {
    beforeEach(function () {
      render();
    });

    it('show breadCrumb class', function () {
      expect(breadCrumb.find('.arrow-breadcrumb')).to.have.lengthOf(1);
    });

    it('show active class on selected item', function () {
      expect(breadCrumb.find('li').at(selected).hasClass('active')).to.be.true;
    });

    it('does not show active class on all other items', function () {
      const aTags = breadCrumb.find('a');

      for (let i = 0; i < aTags.length; i++) {
        if (i !== selected) {
          expect(aTags.at(i).hasClass('active')).to.be.false;
        }
      }
    });
  });

  describe('Actions', function () {
    beforeEach(function () {
      render();
    });

    it('should call onChange with index < selected', function () {
      const index = 1;
      breadCrumb.find('a').at(index).simulate('click');

      expect(onChange.args[0][0]).to.deep.equal(index);
    });

    it('should not call onChange with index >= selected', function () {
      const buttons = breadCrumb.find('a');

      buttons.at(selected).simulate('click');
      buttons.at(selected + 1).simulate('click');

      expect(onChange.called).to.be.false;
    });
  });
});
