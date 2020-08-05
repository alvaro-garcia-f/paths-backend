const UserModel = require ('../models/users.model')
const bcrypt = require ('bcrypt')
const mongoose = require ('mongoose')

function getProfile (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .populate('completed')
    .then(user => { res.json(user) })
    .catch(err => res.status(403).json({ error: err }))
}

function getStudents (req, res) {
  UserModel
    .find({ role: 'student'})
    .then(students => { res.json(students) })
    .catch(err => res.status(403).json({ error: err }))
}

function createStudent (req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)

  UserModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    .then(user => {
      const userData = { email: user.email}
      res.json( userData )
    })
    .catch(err => res.status(403).json({ error: err }))
}

function editStudent (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function deleteStudent (req, res) {
  UserModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function completeLesson (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .then(user => {
      if(!user.completed.includes(mongoose.Types.ObjectId(req.params.id))) {
        user.completed.push(req.params.id)
        user
          .save()
          .then(response => res.json(response))
      }
    })
    .catch(err => console.error(err))
}

module.exports = {
  getProfile,
  getStudents,
  createStudent,
  editStudent,
  completeLesson,
  deleteStudent
}