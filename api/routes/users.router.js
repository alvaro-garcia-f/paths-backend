const router = require ('express').Router()

const { authUser } = require ('../utils')

const {
  createStudent,
  getStudents,
  deleteStudent
} = require ('../controllers/user.controller')


router
  .get ('/students', authUser, getStudents)
  .post ('/student', authUser, createStudent)
  .delete ('/student/:id', authUser, deleteStudent)

module.exports = router