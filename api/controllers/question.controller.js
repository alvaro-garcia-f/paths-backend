const QuestionModel = require('../models/questions.model')
const LessonModel = require('../models/lessons.model')
const mongoose = require('mongoose')

function getQuiz (req, res) {
  QuestionModel
    .find({ lesson: req.params.id })
    .then(quiz =>
      res.json(quiz))
    .catch(err => res.status(403).json({ error: err }))
}

function addQuestion (req, res) {
  const data = req.body
  data.lesson = mongoose.Types.ObjectId(req.params.lessonId)
  QuestionModel
    .create(data)
    .then(question => {

      LessonModel
        .findById(question.lesson)
        .then(lesson => {
          console.log(lesson)

          lesson.quiz.push(question._id)
          lesson.save()
        })
        .catch(err => res.status(403).json({ error: err }))
    })
    .catch(err => res.status(403).json({ error: err }))
}

module.exports = {
  getQuiz,
  addQuestion
}