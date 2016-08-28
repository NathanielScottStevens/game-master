import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DieStatLine from '../imports/ui/components/DieStatLine.jsx';

storiesOf('DieStatLine', module)
  .add('stat level 0', () => (
    <DieStatLine
      label='Strength'
      field='strength'
      value={0}
    />
  ))
  .add('stat level 3', () => (
    <DieStatLine
      label='Strength'
      field='strength'
      value={3}
    />
  ))
  .add('stat level 5', () => (
    <DieStatLine
      label='Strength'
      field='strength'
      value={5}
    />
  ))
