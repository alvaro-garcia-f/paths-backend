const mongoose = require ('mongoose')

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
  quiz: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'question'
  }]

})

const lessonModel = mongoose.model ('lesson', lessonSchema)
module.exports = lessonModel