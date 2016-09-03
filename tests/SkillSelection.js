import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SkillSelection from '../imports/ui/components/SkillSelection.jsx';
import { skills } from '../imports/api/skills/fixtures.js';


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
