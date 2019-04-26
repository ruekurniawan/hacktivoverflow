const router = require('express').Router()
const answerController = require('../controllers/answerController')
const {Authenticate} = require('../middlewares/authentication')

router.use(Authenticate)
router.put('/:id/downvote', answerController.downvote)
router.put('/:id/upvote', answerController.upvote)

router.get('/', answerController.findAll)
router.post('/', answerController.create)
router.put('/:id', answerController.update)
router.delete('/:id', answerController.remove)

module.exports = router