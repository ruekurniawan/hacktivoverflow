const mongoose = require('mongoose')
const Schema = mongoose.Schema

let answerSchema = new Schema({
  userId: {
    type: 'ObjectId',
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  upvotes: [{
    type: 'ObjectId',
    ref: 'User'
  }],
  downvotes: [{
    type: 'ObjectId',
    ref: 'User'
  }]
})

let Answer = mongoose.model('answer', answerSchema)

module.exports = Answer