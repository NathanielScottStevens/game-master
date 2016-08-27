import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';

import StatList from './StatList.jsx';
import DieStatLine from './DieStatLine.jsx';

describe('StatList', () => {

  context('Rendering', () => {
    const data = {
      strength: 1,
      agility: 2,
      smarts: 3,
      spirit: 4,
      vigor: 1
    }
    const label = 'Attributes';
    const stats = shallow(<StatList data={data} label={label} />);

    it('should show five DieStatLine children', () => {
      expect(stats.find(DieStatLine)).to.have.a.lengthOf(5);
    });

    it('should show the label', () => {
      expect(stats.find('h3').text()).to.contain(label);
    });
  });

});
