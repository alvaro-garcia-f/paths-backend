const mongoose = require ('mongoose')

const questionSchema = new mongoose.Schema ({
  question: {
    type: String,
    required: [true, 'Question required']
  },
  answer: {
    type: String,
    enum: ['a', 'b', 'c', 'd'],
    required: [true, 'Answer required']
  },
  options: {
    a: {
      type: String
    },
    b: {
      type: String
    },
    c: {
      type: String
    },  
    d: {
      type: String
    }
  }
})

const lessonSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: [true, 'Title required']
  },
  url: {
    type: String
  },
  content: {
    type: [String]
  },
  quiz: [questionSchema]
})

const lessonModel = mongoose.model ('lesson', lessonSchema)
module.exports = lessonModel