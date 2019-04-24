const {verify} = require('../helpers/jwt')
const User = require('../models/user')

module.exports = {
  Authenticate: function (req, res, next) {
    try {
      // console.log(req.headers)
      let token = req.headers.token

      if(token) {
        let decode = verify(token)
        req.authenticate = decode
        // console.log(decode)

        User
          .findOne({
            _id: req.authenticate.id
          })
          .then(user => {
            if(user) {
              req.user = user
              next()
            } else {
              res.status(500).json({
                msg: 'Invalid Token'
              })
            }
          })
      } else {
        res.status(404).json({
          msg : 'U must be login'
        })  
      }
    } catch (err) {
      console.log(err.message)
      res.status(404).json({
        msg : 'Token Is Not Valid'
      })
    }
  }
}