const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  //listLessons,
  //getLesson,
  getQuiz,
  //createLesson,
  addQuestion
} = require ('../controllers/question.controller')

router
  .get ('/:lessonId', authUser, getQuiz)
  .post ('/:lessonId', authTeacher, addQuestion)

module.exports = router