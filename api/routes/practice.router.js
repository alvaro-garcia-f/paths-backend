const router = require('express').Router()

const { 
  authUser
} = require ('../utils')

const {
  getAllIntervals,
  updateQuestionInterval
} = require('../controllers/practice.controller')

router
  .get('/', authUser, getAllIntervals)
  .put('/question/:id', authUser, updateQuestionInterval)

module.exports = router