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
  Skills.insert({name: "Boating",       attribute: "agility"});
  Skills.insert({name: "Climbing",      attribute: "strength"});
  Skills.insert({name: "Driving",       attribute: "agility"});
  Skills.insert({name: "Fighting",      attribute: "agility"});
  Skills.insert({name: "Gambling",      attribute: "smarts"});
  Skills.insert({name: "Healing",       attribute: "smarts"});
  Skills.insert({name: "Intimidation",  attribute: "spirit"});
  Skills.insert({name: "Investigation", attribute: "smarts"});
  Skills.insert({name: "Knowledge",     attribute: "smarts"});
  Skills.insert({name: "Lockpicking",   attribute: "agility"});
  Skills.insert({name: "Notice",        attribute: "smarts"});
  Skills.insert({name: "Persuasion",    attribute: "spirit"});
  Skills.insert({name: "Piloting",      attribute: "agility"});
  Skills.insert({name: "Repair",        attribute: "smarts"});
  Skills.insert({name: "Riding",        attribute: "agility"});
  Skills.insert({name: "Shooting",      attribute: "agility"});
  Skills.insert({name: "Stealth",       attribute: "agility"});
  Skills.insert({name: "Streetwise",    attribute: "smarts"});
  Skills.insert({name: "Survival",      attribute: "smarts"});
  Skills.insert({name: "Swimming",      attribute: "agility"});
  Skills.insert({name: "Taunt",         attribute: "smarts"});
  Skills.insert({name: "Throwing",      attribute: "agility"});
  Skills.insert({name: "Tracking",      attribute: "smarts"});
}

Meteor.startup( () => {
  setCharacters();
  setSkills();
});
