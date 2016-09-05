import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'meteor/practicalmeteor:chai';
import { describe, it } from 'meteor/practicalmeteor:mocha';

import PointBox from './PointBox.jsx';

describe('PointBox', function () {
  let component;

  function render(points, dataId) {
    component = shallow(<PointBox points={points} dataId={dataId} />);
  }

  it('should show points', function () {
    render(15);
    expect(component.text()).to.contain('15');
  });

  it('should have default points of 0', function () {
    render();
    expect(component.text()).to.contain('0');
  });

  it('should have default data-id of "point-box"', function () {
    render();
    expect(component.is('[data-id="point-box"]')).to.be.true;
  });

  it('should have data-id when passed', function () {
    render(0, 'test-id');
    expect(component.is('[data-id="test-id"]')).to.be.true;
  });
});
