const mongoose = require ('mongoose')

const lessonSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: [true, 'Title required']
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  quiz: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'question'
  }],
  lock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lesson'
  },
  order: {
    type: Number
  }
})

const lessonModel = mongoose.model ('lesson', lessonSchema)
module.exports = lessonModel