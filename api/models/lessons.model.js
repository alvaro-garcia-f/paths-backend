const mongoose = require ('mongoose')

const lessonSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: [true, 'Title required']
  },
  content: {
    type: [String]
  }
})

const lessonModel = mongoose.model ('lesson', lessonSchema)
module.exports = lessonModel