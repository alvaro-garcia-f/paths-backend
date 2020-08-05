const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lesson',
    required: true
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'question',
    required: true
  },
  correct: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date ()
  }
})

const resultModel = mongoose.model ('result', resultSchema)
module.exports = resultModel