const QuestionModel = require('../models/questions.model')
const LessonModel = require('../models/lessons.model')
const ResultModel = require('../models/results.model')
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
  const promiseArray = []
  
  promiseArray.push(QuestionModel.findByIdAndDelete(req.params.id))
  promiseArray.push(ResultModel.remove({ question: req.params.id }))

  LessonModel
    .find()
    .then(lessons => {
      lessons.forEach(lesson => {
        lesson.quiz = lesson.quiz.filter(question => question != req.params.id)
        promiseArray.push(lesson.save())
      })
      
      Promise.all(promiseArray)
        .then(response => res.json(response))
        .catch(err => console.error(err))
    })
  .catch(err => console.error(err))  
}

module.exports = {
  getQuestion,
  getQuiz,
  addQuestion,
  editQuestion,
  deleteQuestion
}