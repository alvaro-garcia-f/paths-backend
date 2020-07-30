const router = require ('express').Router()

const { 
  authUser,
  authTeacher
} = require ('../utils')

const {
  listLessons,
  getLesson,
  createLesson
} = require ('../controllers/lesson.controller')

router
  .get ('/', authUser, listLessons)
  .get ('/:id', authUser, getLesson)
  .post ('/', authTeacher, createLesson)

module.exports = router