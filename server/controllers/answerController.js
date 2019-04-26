const Answer = require('../models/answer')
const Quest = require('../models/question')

class AnswerController {
  static upvote(req, res) {
    Answer
      .findById(req.params.id)
      .then(answer => {
        let downVote = answer.downvotes.indexOf(req.user._id) === -1
        let upVote = answer.upvotes.indexOf(req.user._id) === -1
        if(answer){
          if(downVote && upVote) {
            answer.upvotes.push(req.user._id)
            return answer.save()
          } else if(downVote === false){
            answer.downvote = answer.downvotes.filter(el => {
              return el !== req.user._id
            })
            return answer.save()
          }
        }
      })
      .then(results => {
        res.status(200).json(results)
      })
      .catch(err => {
        // console.log(err)
        res.status(500).json(err)
      })
  }

  static downvote(req, res) {
    // console.log(req.user)
    Answer
      .findById(req.params.id)
      .then(answer => {
        // console.log(answer)
        let downVote = answer.downvotes.indexOf(req.user._id) === -1
        let upVote = answer.upvotes.indexOf(req.user._id) === -1
        if(answer){
          if(downVote && upVote) {
            answer.downvotes.push(req.user._id)
            return answer.save()
          } else if(upVote === false){
            answer.upvotes = answer.upvotes.filter(el => {
              return el !== req.user._id
            })
            return result.save()
          }
        }
      })
      .then(results => {
        res.status(200).json(results)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    Answer
      .find({})
      .then(answerResult => {
        res.status(200).json(answerResult)
      })
      .catch(err => {
        console.log(err)
      })
  }
  static create(req, res) {
    // console.log(req.headers)
    let answered = {}
    Answer
      .create({
        userId: req.user._id,
        title: req.body.title,
        description: req.body.description
      })
      .then(answer => {
        answered = answer
        return Quest.findById(req.body.questionId)
      })
      .then(quest =>{
          quest.answer.push(answered.id)
          return quest.save()
      })
      .then(answers => {
        res.status(201).json(answers)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Answer  
      .findByIdAndUpdate(req.params.id, {
        description: req.body.description
      })
      .then((updateAnswer) => {
        res.status(200).json(updateAnswer)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    Answer
      .findByIdAndDelete(req.params.id)
      .then((removeAnswer) => {
        res.status(200).json(removeAnswer)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = AnswerController