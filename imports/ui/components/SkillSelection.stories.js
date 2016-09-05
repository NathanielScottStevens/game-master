import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SkillSelection from './SkillSelection.jsx';
import { skills } from '../../api/skills/fixtures.js';

let skillSelection;

let characterSkills = {
  boating: 1,
  climbing: 2,
};

storiesOf('SkillSelection', module)
  .add('With Label', () => (
    <SkillSelection
      skills={skills}
      characterSkills={characterSkills}
      onChange={() => {}}
    />
  ))
