import SkillSelection from '../components/SkillSelection.jsx';
import { Skills } from '../../api/skills/skills.js';

export default SkillSelectionContainer = createContainer(({ params }) => {
  Meteor.subscribe("skills");
  return {
    skills: Skills.find().fetch()
  };
}, SkillSelection);
