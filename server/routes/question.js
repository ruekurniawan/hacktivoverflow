const router = require('express').Router()
const questRoutes = require('../controllers/questionController')
const {Authenticate} = require('../middlewares/authentication')
router.get('/',questRoutes.readAll)
router.get('/:id', questRoutes.readOne)

router.use(Authenticate)
router.put('/:id/downvote', questRoutes.downvote)
router.put('/:id/upvote', questRoutes.upvote)

router.post('/', questRoutes.create)
router.put('/:id', questRoutes.update)
router.delete('/:id', questRoutes.remove)

module.exports = router