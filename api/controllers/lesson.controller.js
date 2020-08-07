const LessonModel = require ('../models/lessons.model')

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

module.exports = {
  listLessons,
  getLesson,
  createLesson
}