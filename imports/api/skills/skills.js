import Meteor from 'meteor';
import { Mongo } from 'meteor/mongo';


export const Skills = new Mongo.Collection('skills');

if (Meteor.isServer) {
  Meteor.publish('skills', function () {
    return Skills.find();
  });
}
