import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import StatList from './StatList.jsx';
import DieStatLine from './DieStatLine.jsx';

describe('StatList', function() {
  let stats;
  let defaultItems = {
    strength: 1,
    agility: 2,
    smarts: 3,
    spirit: 4,
    vigor: 1
  }

  function render(items){
    if (!items) {
      items = defaultItems;
    }
    let label = 'Attributes';
    stats = shallow(<StatList items={items} label={label} />);
  }

  describe('Rendering', function() {
    render();

    it('should show five DieStatLine children', function() {
      expect(stats.find(DieStatLine)).to.have.a.lengthOf(5);
    });

    it('should show the label', function() {
      expect(stats.text()).to.contain('Attributes');
    });

    it('should pass correct values to DieStatLine', function() {
      let dieStatLines = stats.find(DieStatLine);
      let values = dieStatLines.map(line => line.prop('value'));

      expect(values[0]).to.equal(1);
      expect(values[1]).to.equal(2);
      expect(values[2]).to.equal(3);
      expect(values[3]).to.equal(4);
      expect(values[4]).to.equal(1);
    });
  });

});
