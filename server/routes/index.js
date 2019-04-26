const router = require('express').Router()
const userRoutes = require('../routes/user')
const questRoutes = require('../routes/question')
const answerRoutes = require('../routes/answer')
// const {Authenticate} = require('../middlewares/authentication')



router.use('/users', userRoutes)
// router.use(Authenticate)
router.use('/quest', questRoutes)
router.use('/answer', answerRoutes)
module.exports = router