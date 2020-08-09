const LessonModel = require ('../models/lessons.model')
const ResultModel = require ('../models/results.model')
const QuestionModel = require ('../models/questions.model')
const UserModel = require ('../models/users.model')

function listLessons (req, res) {
  LessonModel
    .find()
    .sort({ 'order': 1 })
    .then(lessons => {
      res.json(lessons)
    })
    .catch(err => res.status(403).json({ error: err }))
}

function getLesson (req, res) {
  LessonModel
    .findById(req.params.id)
    .then(lesson => {
      res.json(lesson)
    })
    .catch(err => res.status(403).json({ error: err }))
}

function getNextLesson (req, res) {
  LessonModel
    .findById(req.params.id)
    .then(lesson => {
      
      LessonModel
        .find({ order: lesson.order + 1 })
        .then(next => {
          res.json(next)
        })
        .catch(err => res.status(403).json({ error: err }))
    })
    .catch(err => res.status(403).json({ error: err }))
}

function createLesson (req, res) {
  LessonModel
    .create({
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
      lock: req.body.lock,
      order: req.body.order
    })
    .then(lesson => { res.json(lesson) })
    .catch(err => res.status(403).json({ error: err }))
}

function editLesson (req, res) {
  LessonModel
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function updateOrder (req, res) {
  const promiseArray = []
  
  req.body.forEach((element, i) => {
    promiseArray.push( LessonModel.findByIdAndUpdate(element, { 'order': i }, { new:true }))
  })

  Promise
    .all(promiseArray)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.error(err))
}

function deleteLesson (req, res) {
  const promiseArray = []

  promiseArray.push(LessonModel.findByIdAndDelete(req.params.id))
  promiseArray.push(ResultModel.remove({ lesson: req.params.id }))
  promiseArray.push(QuestionModel.remove({ lesson: req.params.id }))

  UserModel
    .find()
    .then(users => {
      users.forEach(user => {
        user.completed = user.completed.filter(lesson => lesson != req.params.id)
        promiseArray.push(user.save())
      })
      
      Promise.all(promiseArray)
        .then(response => res.json(response))
        .catch(err => console.error(err))
    })
}

module.exports = {
  listLessons,
  getLesson,
  getNextLesson,
  createLesson,
  editLesson,
  updateOrder,
  deleteLesson
}