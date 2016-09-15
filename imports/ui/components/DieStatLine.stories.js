import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DieStatLine from './DieStatLine.jsx';

storiesOf('DieStatLine', module)
  .add('stat level 1', () => (
    <DieStatLine
      label="Strength"
      field="strength"
      value={1}
    />
  ))
  .add('stat level 3', () => (
    <DieStatLine
      label="Strength"
      field="strength"
      value={3}
    />
  ))
  .add('stat level 5', () => (
    <DieStatLine
      label="Strength"
      field="strength"
      value={5}
    />
  ));
