const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  listLessons,
  getLesson,
  //getQuiz,
  createLesson,
  //addQuestion
} = require ('../controllers/lesson.controller')

router
  .get ('/', authUser, listLessons)
  .get ('/:id', authUser, getLesson)
 // .get ('/:id/quiz', authUser, getQuiz)
  .post ('/', authTeacher, createLesson)
//  .post ('/:id/quiz', authTeacher, addQuestion)

module.exports = router