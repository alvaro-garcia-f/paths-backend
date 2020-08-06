const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  getQuestion,
  getQuiz,
  addQuestion
} = require ('../controllers/question.controller')

router
  .get ('/:id', authUser, getQuestion)
  .get ('/lessons/:lessonId', authUser, getQuiz)
  .post ('/:lessonId', authTeacher, addQuestion)

module.exports = router