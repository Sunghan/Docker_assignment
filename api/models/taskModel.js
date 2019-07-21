'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter title'
  },
  description: {
    type: String,
    required: 'Please enter description'
  },
  startdate: {
    type: Date,
    default: Date.now
  },
  enddate: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    default: 'Please enter category'
  },
  priority: {
    type: [{
        type: String,
        enum: ['high', 'medium', 'low']
    }],
    default: ['low']
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);