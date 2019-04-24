const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questSchema = new Schema({
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
  answer:[{
    type: 'ObjectId',
    ref: 'Answer'
  }],
  upvotes: [{
    type: 'ObjectId',
    ref: 'User'
  }],
  downvotes: [{
    type: 'ObjectId',
    ref: 'User'
  }]
})

let Quest = mongoose.model('quest', questSchema)

module.exports = Quest