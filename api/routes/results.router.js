const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  addAnswer
} = require ('../controllers/result.controller')

router
  .post ('/', authUser, addAnswer)

module.exports = router