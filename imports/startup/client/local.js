import { Mongo } from 'meteor/mongo';

export const TempCharacters = new Mongo.Collection(null);

TempCharacters.insert({
  strength: 1,
  agility: 1,
  smarts: 1,
  spirit: 1,
  vigor: 1
});