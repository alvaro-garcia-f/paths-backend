const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const lessonsRouter = require('./lessons.router')

router
  .use('/auth', authRouter)
  .use('/users', usersRouter)
  .use('/lessons', lessonsRouter)

module.exports = router