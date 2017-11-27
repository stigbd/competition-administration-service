'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Class', new Schema({
  name: {
    type: String,
    unique: true
  },
  age: {
    type: Number
  },
  gender: {
    type: String,
    enum: ['FEMALE', 'MALE', 'MIXED']
  }
}))