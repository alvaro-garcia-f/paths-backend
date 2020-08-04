const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const lessonsRouter = require('./lessons.router')
const questionsRouter = require('./questions.router')

router
  .use('/auth', authRouter)
  .use('/users', usersRouter)
  .use('/lessons', lessonsRouter)
  .use('/questions', questionsRouter)

module.exports = router