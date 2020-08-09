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
  updateOrder
} = require ('../controllers/lesson.controller')

router
  .get ('/', authUser, listLessons)
  .get ('/:id', authUser, getLesson)
  .get ('/:id/next', authUser, getNextLesson)
  .post ('/', authTeacher, createLesson)
  .put ('/order', authTeacher, updateOrder)
  
module.exports = router