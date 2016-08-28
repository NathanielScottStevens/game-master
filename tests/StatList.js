import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import StatList from '../imports/ui/components/StatList.jsx';

const data = {
  strength: 1,
  agility: 2,
  smarts: 3,
  spirit: 4,
  vigor: 1
}

storiesOf('StatList', module)
  .add('Attributes', () => (
    <StatList
      data={data}
      label='Attributes'
    />
  ))
