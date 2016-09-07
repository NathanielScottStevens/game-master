import { Mongo } from 'meteor/mongo';


export const Skills = new Mongo.Collection('Skills');

if (Meteor.isServer) {
  Meteor.publish('Skills', function () {
    return Skills.find();
  });
}
