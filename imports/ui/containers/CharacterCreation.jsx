import { createContainer } from 'meteor/react-meteor-data';
import CharacterCreation from '../pages/CharacterCreation.jsx';
import { Characters } from '../../api/characters/characters.js';
import { Skills } from '../../api/skills/skills.js';

const CharacterCreationContainer = createContainer(({ params: { id } }) => {
  const charactersHandle = Meteor.subscribe('Characters');
  const skillsHandle = Meteor.subscribe('Skills');
  const isLoading = !charactersHandle.ready() || !skillsHandle.ready();
  const character = Characters.findOne(id);
  const skills = Skills.find().fetch();

  return {
    character,
    skills,
    isLoading,
  };
}, CharacterCreation);

export default CharacterCreationContainer;
