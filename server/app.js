const express = require('express')
const app = express()
const cors = require('cors')
const indexRoutes = require('./routes/index')
const port = 3000

const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017/hacktiv-overflow` , { useNewUrlParser: true })


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())
app.use('/', indexRoutes)

app.listen(port, () => {
  console.log(`Listen in port ${port}`)
})

module.exports = app