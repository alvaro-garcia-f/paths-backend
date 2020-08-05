const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function logIn (req, res) {

  UserModel
    .findOne({ email: req.body.email })
    .select('+password')
    .then(user => {
      console.log(user)
      if (!user) { 
        res.json({ error: 'Email and/or password incorrect' }) 
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const userData = { email: user.email, role: user.role }
          const token = jwt.sign(userData, process.env.SECRET, { expiresIn: '1h' })
          res.json({ token, ...userData })
        } else {
          res.json({ error: 'Email and/or password incorrect' })
        }
      }
    })
    .catch(error => res.status(403).json({ error: error.errmsg }))
}

function myId (req, res)  {
    res.json({ id: res.locals.user._id })
}

module.exports = { logIn, myId }