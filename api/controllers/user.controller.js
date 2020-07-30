const UserModel = require ('../models/users.model')
const bcrypt = require ('bcrypt')

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
      password: hashedPassword,
      role: 'student'
    })
    .then(user => {
      const userData = { email: user.email}
      res.json( userData )
    })
    .catch(err => res.status(403).json({ error: err }))
}

function deleteStudent (req, res) {
  UserModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getStudents,
  createStudent,
  deleteStudent
}