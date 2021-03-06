const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const lessonsRouter = require('./lessons.router')
const questionsRouter = require('./questions.router')
const resultsRouter = require('./results.router')
const practiceRouter = require('./practice.router')

router
  .use('/auth', authRouter)
  .use('/users', usersRouter)
  .use('/lessons', lessonsRouter)
  .use('/questions', questionsRouter)
  .use('/results', resultsRouter)
  .use('/practice', practiceRouter)

module.exports = router