import { Meteor } from 'meteor/meteor';

import { Skills } from '../../api/skills/skills.js';
import { skills } from '../../api/skills/fixtures.js';


function setSkills() {
  Skills.remove({});
  skills.forEach(skill => {
    Skills.insert(skill);
  });
}

Meteor.startup(() => {
  setSkills();
});
