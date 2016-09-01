import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BreadCrumb from '../imports/ui/components/BreadCrumb.jsx';

let list = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5' ];

storiesOf('BreadCrumb', module)
  .add('Step 1', () => (
    <BreadCrumb
      list={list}
      selected={0}
      onChange={()=>{}}
    />
  ))
  .add('Step 3', () => (
    <BreadCrumb
      list={list}
      selected={2}
      onChange={()=>{}}
    />
  ))
  .add('Step 5', () => (
    <BreadCrumb
      list={list}
      selected={4}
      onChange={()=>{}}
    />
  ))
