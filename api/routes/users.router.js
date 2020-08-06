const router = require ('express').Router()

const { authTeacher, authUser } = require ('../utils')

const {
  getProfile,
  getStudents,
  getStudent,
  createStudent,
  editStudent,
  completeLesson,
  deleteStudent
} = require ('../controllers/user.controller')


router
  .get ('/me', authUser, getProfile)
  .get ('/students', authTeacher, getStudents)
  .get ('/students/:id', authTeacher, getStudent)
  .post ('/student', authTeacher, createStudent)
  .put ('/student/:id', authTeacher, editStudent)
  .put ('/student/lesson/:id', authUser, completeLesson)
  .delete ('/student/:id', authTeacher, deleteStudent)

module.exports = router