import CharacterCreation from '../components/CharacterCreation.jsx';
import { Characters } from '../../api/characters/characters.js';
import { Skills } from '../../api/skills/skills.js';

export default CharacterCreationContainer = createContainer(({ params }) => {
  Meteor.subscribe('characters');
  Meteor.subscribe("skills");

  return {
    character: Characters.create(),
    skills: Skills.find().fetch(),
  };
}, CharacterCreation);
