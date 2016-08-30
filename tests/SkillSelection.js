import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SkillSelection from '../imports/ui/components/SkillSelection.jsx';

let characterSkills = {
  boating: 1,
  climbing: 2,
};

let skills = [
  {name: "boating",       attribute: "agility"},
  {name: "climbing",      attribute: "strength"},
  {name: "gambling",      attribute: "smarts"},
  {name: "intimidation",  attribute: "spirit"}
];

let skillSelection;

storiesOf('SkillSelection', module)
  .add('With Label', () => (
    <SkillSelection
      skills={skills}
      characterSkills={characterSkills}
      onChange={() => {}}
    />
  ))
