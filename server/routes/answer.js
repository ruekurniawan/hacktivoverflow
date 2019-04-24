const router = require('express').Router()
const answerController = require('../controllers/answerController')

router.put('/:id/downvote', answerController.downvote)
router.put('/:id/upvote', answerController.upvote)

router.post('/', answerController.create)
router.put('/:id', answerController.update)
router.delete('/:id', answerController.remove)

module.exports = router