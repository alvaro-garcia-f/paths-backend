const router = require ('express').Router()

const { authUser } = require ('../utils')

const {
  createStudent,
  getStudents
} = require ('../controllers/user.controller')


router
  .get ('/students', authUser, getStudents)
  .post ('/student', authUser, createStudent)

module.exports = router