import React from 'react';
import { storiesOf } from '@kadira/storybook';
import StatList from './StatList.jsx';

const items = {
  strength: 1,
  agility: 2,
  smarts: 3,
  spirit: 4,
  vigor: 1,
};

storiesOf('StatList', module)
  .add('Attributes', () => (
    <StatList
      items={items}
      label="Attributes"
    />
  ));
