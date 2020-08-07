const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  listLessons,
  getLesson,
  createLesson,
  updateOrder
} = require ('../controllers/lesson.controller')

router
  .get ('/', authUser, listLessons)
  .get ('/:id', authUser, getLesson)
  .post ('/', authTeacher, createLesson)
  .put ('/order', authTeacher, updateOrder)
  
module.exports = router