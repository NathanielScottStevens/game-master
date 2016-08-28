import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CheckListCard from '../imports/ui/components/CheckListCard.jsx';

const items = [
  {id: '1', label: 'Fighting', initialValue: true},
  {id: '1', label: 'Throwing', initialValue: false},
  {id: '1', label: 'Swimming', initialValue: true}
]

storiesOf('CheckListCard', module)
  .add('With Label', () => (
    <CheckListCard
      label="Agility"
      items={items}
      onChange={()=>{}}
    />
  ))
