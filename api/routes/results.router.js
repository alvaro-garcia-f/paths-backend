const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  addAnswer, getResults, getOwnResults
} = require ('../controllers/result.controller')

router
  .get ('/user/me', authUser, getOwnResults)
  .get ('/user/:id', authTeacher, getResults)
  .post ('/', authUser, addAnswer)

module.exports = router