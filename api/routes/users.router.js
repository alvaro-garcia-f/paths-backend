const router = require ('express').Router()

const { authTeacher } = require ('../utils')

const {
  createStudent,
  getStudents,
  editStudent,
  deleteStudent
} = require ('../controllers/user.controller')


router
  .get ('/students', authTeacher, getStudents)
  .post ('/student', authTeacher, createStudent)
  .put ('/student/:id', authTeacher, editStudent)
  .delete ('/student/:id', authTeacher, deleteStudent)

module.exports = router