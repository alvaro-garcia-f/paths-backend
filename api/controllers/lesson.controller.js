const LessonModel = require ('../models/lessons.model')

function listLessons (req, res) {
  LessonModel
    .find()
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
      content: req.body.content
    })
    .then(lesson => { res.json(lesson) })
    .catch(err => res.status(403).json({ error: err }))
}

module.exports = {
  listLessons,
  getLesson,
  createLesson
}