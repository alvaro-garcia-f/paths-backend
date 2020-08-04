const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lesson',
    required: true
  },
  question: {
    type: String,
    required: [true, 'Question required']
  },
  answer: {
    type: String,
    enum: ['a', 'b', 'c', 'd'],
    required: [true, 'Answer required']
  },
  option_a: {
      type: String,
      required: [true, 'Option A missing']      
  },
  option_b: {
      type: String,
      required: [true, 'Option B missing']      
  },
  option_c: {
      type: String,
      required: [true, 'Option C missing']      
  },  
  option_d: {
      type: String,
      required: [true, 'Option D missing']      
  }
})

const questionModel = mongoose.model ('question', questionSchema)
module.exports = questionModel