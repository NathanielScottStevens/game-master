import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SkillSelection from './SkillSelection.jsx';
import { skills } from '../../api/skills/fixtures.js';


const characterSkills = {
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
  ));
