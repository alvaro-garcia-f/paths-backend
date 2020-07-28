const router = require ('express').Router()

const { authUser } = require ('../utils')

const {
  listLessons,
  getLesson,
  createLesson
} = require ('../controllers/lesson.controller')

router
  .get ('/', authUser, listLessons)
  .get ('/:id', authUser, getLesson)
  .post ('/', authUser, createLesson)

module.exports = router