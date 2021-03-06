const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  listLessons,
  getLesson,
  getNextLesson,
  createLesson,
  editLesson,
  updateOrder,
  deleteLesson
} = require ('../controllers/lesson.controller')

router
  .get ('/', authUser, listLessons)
  .get ('/:id', authUser, getLesson)
  .get ('/:id/next', authUser, getNextLesson)
  .post ('/', authTeacher, createLesson)
  .put ('/order', authTeacher, updateOrder)
  .put ('/:id', authTeacher, editLesson)
  .delete ('/:id', authTeacher, deleteLesson)
  
module.exports = router