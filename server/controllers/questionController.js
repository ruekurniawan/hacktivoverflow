const Quest = require('../models/question')

class QuestController {
  static readAll(req, res) {
    Quest
      .find({})
      .then((readData) => {
        res.status(200).json(readData)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static readOne(req, res) {
    Quest
      .findById(req.params.id)
      .then((oneData) => {
        res.status(200).json(oneData)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static upvote(req, res) {
    Quest
      .findById(req.params.id)
      .then(quest => {
        let downVote = quest.downvotes.indexOf(req.user._id) === -1
        let upVote = quest.upvotes.indexOf(req.user._id) === -1
        if(quest){
          if(downVote && upVote) {
            quest.upvotes.push(req.user._id)
            return quest.save()
          } else if(downVote === false){
            quest.downvote = quest.downvotes.filter(el => {
              return el !== req.user._id
            })
            return quest.save()
          }
        }
      })
      .then(results => {
        res.status(200).json(results)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
  }

  static downvote(req, res) {
    // console.log(req.user)
    Quest
      .findById(req.params.id)
      .then(quest => {
        // console.log(quest)
        let downVote = quest.downvotes.indexOf(req.user._id) === -1
        let upVote = quest.upvotes.indexOf(req.user._id) === -1
        if(quest){
          if(downVote && upVote) {
            quest.downvotes.push(req.user._id)
            return quest.save()
          } else if(upVote === false){
            quest.upvotes = quest.upvotes.filter(el => {
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

  static create(req, res) {
    Quest
      .create({
        userId: req.user._id,
        title: req.body.title,
        description: req.body.description
      })
      .then(quest => {
        res.status(201).json(quest)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Quest
      .findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description
      })
      .then((updateQuest) => {
        res.status(200).json(updateQuest)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    Quest
      .findByIdAndDelete(req.params.id)
      .then((removeQuest) => {
        res.status(200).json(removeQuest)
      })
      .catch(err => {
         res.status(500).json(err)
      })
  }
}

module.exports = QuestController