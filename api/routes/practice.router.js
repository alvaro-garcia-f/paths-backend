const router = require('express').Router()

const { 
  authUser
} = require ('../utils')

const {
  getAllIntervals,
  getQuestionInterval,
  updateQuestionInterval
} = require('../controllers/practice.controller')

router
  .get('/', authUser, getAllIntervals)
  .get('/question/:id', authUser, getQuestionInterval)
  .put('/question/:id', authUser, updateQuestionInterval)

module.exports = router