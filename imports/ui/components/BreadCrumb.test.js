import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import BreadCrumb from './BreadCrumb.jsx';

describe('BreadCrumb', function() {

  let list = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5' ];
  let selected = 2;
  let onChange = sinon.spy();

  let breadCrumb;

  function render() {
    breadCrumb = shallow(
      <BreadCrumb
        list={list}
        selected={selected}
        onChange={onChange} />
    );
  };

  describe('Rendering', function() {
    render();

    it('show breadCrumb class', function(){
      expect(breadCrumb.find('.arrow-breadcrumb')).to.have.lengthOf(1);
    });

    it('show active class on selected item', function() {
      expect(breadCrumb.find('li').at(selected).hasClass('active')).to.be.true;
    });

    it('does not show active class on all other items', function() {
      let aTags = breadCrumb.find('a');

      for (var i = 0; i < aTags.length; i++){
        if (i !== selected){
            expect(aTags.at(i).hasClass('active')).to.be.false;
        }
      }
    });
  });
});
