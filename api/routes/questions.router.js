const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  getQuestion,
  getQuiz,
  addQuestion,
  editQuestion,
  deleteQuestion
} = require ('../controllers/question.controller')

router
  .get ('/:id', authUser, getQuestion)
  .get ('/lessons/:lessonId', authUser, getQuiz)
  .post ('/:lessonId', authTeacher, addQuestion)
  .put ('/:id', authTeacher, editQuestion)
  .delete ('/:id', authTeacher, deleteQuestion)

module.exports = router