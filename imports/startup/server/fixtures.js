import { Meteor } from 'meteor/meteor';

import { Characters } from '../../api/characters/characters.js';
import { Skills } from '../../api/skills/skills.js';

function setCharacters(){
  Characters.remove({});
  Characters.insert({firstName: "Nathaniel", lastName: "Stevens"});
  Characters.insert({firstName: "Adam", lastName: "Stevens"});
  Characters.insert({firstName: "Alyssa", lastName: "Stevens"});
}

function setSkills(){
  Skills.remove({});
  Skills.insert({name: "boating",       attribute: "agility"});
  Skills.insert({name: "climbing",      attribute: "strength"});
  Skills.insert({name: "driving",       attribute: "agility"});
  Skills.insert({name: "fighting",      attribute: "agility"});
  Skills.insert({name: "gambling",      attribute: "smarts"});
  Skills.insert({name: "healing",       attribute: "smarts"});
  Skills.insert({name: "intimidation",  attribute: "spirit"});
  Skills.insert({name: "investigation", attribute: "smarts"});
  Skills.insert({name: "knowledge",     attribute: "smarts"});
  Skills.insert({name: "lockpicking",   attribute: "agility"});
  Skills.insert({name: "notice",        attribute: "smarts"});
  Skills.insert({name: "persuasion",    attribute: "spirit"});
  Skills.insert({name: "piloting",      attribute: "agility"});
  Skills.insert({name: "repair",        attribute: "smarts"});
  Skills.insert({name: "riding",        attribute: "agility"});
  Skills.insert({name: "shooting",      attribute: "agility"});
  Skills.insert({name: "stealth",       attribute: "agility"});
  Skills.insert({name: "streetwise",    attribute: "smarts"});
  Skills.insert({name: "survival",      attribute: "smarts"});
  Skills.insert({name: "swimming",      attribute: "agility"});
  Skills.insert({name: "taunt",         attribute: "smarts"});
  Skills.insert({name: "throwing",      attribute: "agility"});
  Skills.insert({name: "tracking",      attribute: "smarts"});
}

Meteor.startup( () => {
  setCharacters();
  setSkills();
});
