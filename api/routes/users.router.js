const router = require ('express').Router()

const { authTeacher, authUser } = require ('../utils')

const {
  createStudent,
  getStudents,
  editStudent,
  completeLesson,
  deleteStudent
} = require ('../controllers/user.controller')


router
  .get ('/students', authTeacher, getStudents)
  .post ('/student', authTeacher, createStudent)
  .put ('/student/:id', authTeacher, editStudent)
  .put ('/student/lesson/:id', authUser, completeLesson)
  .delete ('/student/:id', authTeacher, deleteStudent)

module.exports = router