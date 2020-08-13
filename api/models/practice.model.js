const mongoose = require('mongoose')

const practiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'question',
    required: true
  },
  interval: {
    type: Number,
    required: true
  },
  repetitions: {
    type: Number,
    required: true,
  },
  ef: {
    type: Number,
    required: true
  },
  next: {
    type: Number,
    required: true
  }
})

const practiceModel = mongoose.model ('practice', practiceSchema)
module.exports = practiceModel