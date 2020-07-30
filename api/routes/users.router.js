const router = require ('express').Router()

const { authUser } = require ('../utils')

const {
  createStudent,
  getStudents,
  editStudent,
  deleteStudent
} = require ('../controllers/user.controller')


router
  .get ('/students', authUser, getStudents)
  .post ('/student', authUser, createStudent)
  .put ('/student/:id', authUser, editStudent)
  .delete ('/student/:id', authUser, deleteStudent)

module.exports = router