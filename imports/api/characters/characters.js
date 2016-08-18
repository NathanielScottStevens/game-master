import { Mongo } from 'meteor/mongo';

export const Characters = new Mongo.Collection('characters');

//Removed autopublish
if (Meteor.isServer){
  Meteor.publish('characters', function() {
    return Characters.find();
  })
}
