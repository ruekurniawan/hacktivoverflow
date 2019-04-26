const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questSchema = new Schema({
  userId: {
    type: 'ObjectId',
    ref: 'user'
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
    ref: 'answer'
  }],
  upvotes: [{
    type: 'ObjectId',
    ref: 'user'
  }],
  downvotes: [{
    type: 'ObjectId',
    ref: 'user'
  }]
})

let Quest = mongoose.model('quest', questSchema)

module.exports = Quest