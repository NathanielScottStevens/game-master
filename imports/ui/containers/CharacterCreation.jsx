import CharacterCreation from '../components/CharacterCreation.jsx';
import { Characters } from '../../api/characters/characters.js';

export default CharacterCreationContainer = createContainer(({ params }) => {
  Meteor.subscribe('characters');
  return {
    character: Characters.create()
  };
}, CharacterCreation);
