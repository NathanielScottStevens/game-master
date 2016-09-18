import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'meteor/practicalmeteor:chai';
import { describe, it } from 'meteor/practicalmeteor:mocha';

import PointBox from './PointBox.jsx';

describe('PointBox', function () {
  let component;
  const label = 'label';

  function render(points, dataId) {
    component = shallow(<PointBox points={points} label={label} dataId={dataId} />);
  }

  it('should show points', function () {
    render(15);
    expect(component.html()).to.contain('15');
  });

  it('should have default points of 0', function () {
    render();
    expect(component.html()).to.contain('0');
  });

  it('should have default data-id of "point-box"', function () {
    render();
    expect(component.is('[data-id="point-box"]')).to.be.true;
  });

  it('should have data-id when passed', function () {
    render(0, 'test-id');
    expect(component.is('[data-id="test-id"]')).to.be.true;
  });

  it('should show with warning class', function () {
    render(2);
    expect(component.find('.warning')).to.have.a.lengthOf(1);
  });

  it('should show with danger class', function () {
    render(-1);
    expect(component.find('.danger')).to.have.a.lengthOf(1);
  });
});
