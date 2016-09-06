import { createContainer } from 'React';
import CharacterCreation from '../components/CharacterCreation.jsx';
import { Characters } from '../../api/characters/characters.js';
import { Skills } from '../../api/skills/skills.js';

const CharacterCreationContainer = createContainer(() => {
  Meteor.subscribe('characters');
  Meteor.subscribe('skills');

  return {
    character: Characters.create(),
    skills: Skills.find().fetch(),
  };
}, CharacterCreation);

export default CharacterCreationContainer;
