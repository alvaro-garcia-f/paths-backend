const QuestionModel = require('../models/questions.model')
const LessonModel = require('../models/lessons.model')
const mongoose = require('mongoose')

function getQuestion (req, res) {
  QuestionModel
    .findById(req.params.id)
    .then(question =>
      res.json(question))
    .catch(err => res.status(403).json({ error: err }))
}

function getQuiz (req, res) {
  QuestionModel
    .find({ lesson: req.params.lessonId })
    .populate('quiz')
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
          lesson.quiz.push(question._id)
          lesson
            .save()
            .then(response => res.json(response))
        })
        .catch(err => res.status(403).json({ error: err }))
    })
    .catch(err => res.status(403).json({ error: err }))
}

function editQuestion (req, res) {
  QuestionModel
  .findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(response => res.json(response))
  .catch(err => console.error(err))
}

function deleteQuestion (req, res) {

}

module.exports = {
  getQuestion,
  getQuiz,
  addQuestion,
  editQuestion,
  deleteQuestion
}