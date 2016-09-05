import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CheckListCard from './CheckListCard.jsx';

const items = [
  { id: '1', label: 'Fighting', value: true },
  { id: '1', label: 'Throwing', value: false },
  { id: '1', label: 'Swimming', value: true },
];

storiesOf('CheckListCard', module)
  .add('With Label', () => (
    <CheckListCard
      label="Agility"
      items={items}
      onChange={() => {}}
    />
  ));
