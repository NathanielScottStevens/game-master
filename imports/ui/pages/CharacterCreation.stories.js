import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CharacterCreation from './CharacterCreation.jsx';

let character = {
  attributes: {
    strength: 1,
    agility: 1,
    smarts: 1,
    spirit: 1,
    vigor: 1,
  },
  skills: {
    climbing: 1,
    investigation: 2,
  },
}

storiesOf('CharacterCreation', module)
  .add('Step 1', () => (
    <CharacterCreation
      character={ character }
      />
  ))
