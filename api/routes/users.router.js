const router = require ('express').Router()

const { authTeacher, authUser } = require ('../utils')

const {
  getProfile,
  getStudents,
  createStudent,
  editStudent,
  completeLesson,
  deleteStudent
} = require ('../controllers/user.controller')


router
  .get ('/me', authUser, getProfile)
  .get ('/students', authTeacher, getStudents)
  .post ('/student', authTeacher, createStudent)
  .put ('/student/:id', authTeacher, editStudent)
  .put ('/student/lesson/:id', authUser, completeLesson)
  .delete ('/student/:id', authTeacher, deleteStudent)

module.exports = router