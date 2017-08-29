// MODULES

const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// SERVER

const app = express()

const inDevelopment = process.env.NODE_ENV === 'development'
const inProduction = !inDevelopment

// MIDDLEWARE

// serve built client in production
if (inProduction) {
  app.use(express.static(path.resolve(__dirname, '../client/dist')))
}

// serve cross origin requests in development
if (inDevelopment) {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
}

app.use(bodyParser.json())

// logging
app.use(morgan(inDevelopment ? 'dev' : 'tiny'))

// ROUTES

app.use('/', require(path.resolve(__dirname, 'routes/main-router.js')))

// EXPORTS

module.exports = app
