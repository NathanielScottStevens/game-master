import { createContainer } from 'meteor/react-meteor-data';
import CharacterCreation from '../pages/CharacterCreation.jsx';
import { Characters } from '../../api/characters/characters.js';
import { Skills } from '../../api/skills/skills.js';

const CharacterCreationContainer = createContainer(({ params: { id }, location: { query } }) => {
  const charactersHandle = Meteor.subscribe('Characters');
  const skillsHandle = Meteor.subscribe('Skills');
  const isLoading = !charactersHandle.ready() || !skillsHandle.ready();
  const character = Characters.findOne(id);
  const skills = Skills.find().fetch();
  const step = query && query.step ? Number(query.step) : 0;

  return {
    character,
    skills,
    isLoading,
    step,
  };
}, CharacterCreation);

export default CharacterCreationContainer;
