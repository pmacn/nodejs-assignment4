const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())


app.use(errorHandler())
app.listen(8000)