import { Mongo } from 'meteor/mongo';


export const Hindrances = new Mongo.Collection('Hindrances');

if (Meteor.isServer) {
  Meteor.publish('Hindrances', function () {
    return Hindrances.find();
  });
}
