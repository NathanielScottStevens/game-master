import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PointBox from './PointBox.jsx';

storiesOf('PointBox', module)
  .add('normal', () => (
    <PointBox
      points={15}
    />
  ))
  .add('warning', () => (
    <PointBox
      points={4}
    />
  ))
  .add('danger', () => (
    <PointBox
      points={-1}
    />
  ));
