import { Meteor } from 'meteor/meteor';

import { Characters } from '../../api/characters/characters.js';

function setCharacters(){
  Characters.remove({});
  Characters.insert({firstName: "Nathaniel", lastName: "Stevens"});
  Characters.insert({firstName: "Adam", lastName: "Stevens"});
  Characters.insert({firstName: "Alyssa", lastName: "Stevens"});
}

Meteor.startup( () => {
  setCharacters();
});
