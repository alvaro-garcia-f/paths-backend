const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: [true, 'Email address required'],
    lowercase: true,
    unique: [true, 'Email address already exists'],
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'email not valid']
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    select: false
  },
  role: {
    type: String,
    default: 'student',
    enum: ['teacher', 'student']
  },
  completed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lesson'
  }]
})

const userModel = mongoose.model ('user', userSchema)
module.exports = userModel