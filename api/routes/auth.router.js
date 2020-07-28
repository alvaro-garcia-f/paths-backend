const router = require('express').Router()
const { authUser } = require('../utils')

const {
  logIn,
  myId
} = require('../controllers/auth.controller')

router
  .get('/me', authUser, myId)
  .post('/login', logIn)

module.exports = router