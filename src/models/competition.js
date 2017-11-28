'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.Promise = global.Promise

module.exports = mongoose.model('Event', new Schema({
  name: {
    type: String
  },
  date: {
    type: Date
  },
  format: {
    type: Schema.Types.ObjectId,
    ref: 'Format'
  },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  competitors: [{ type: Schema.Types.ObjectId, ref: 'Contender' }],
  multiRace: Boolean
}))