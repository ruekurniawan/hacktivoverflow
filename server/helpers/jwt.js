require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
  sign(data) {
    return jwt.sign(data, process.env.JWT_SECRET)
  },
  
  verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}