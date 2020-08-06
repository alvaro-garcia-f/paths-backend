const ResultModel = require('../models/results.model')
const mongoose = require('mongoose')

function addAnswer (req, res) {
  const data = req.body
  data.lesson = mongoose.Types.ObjectId(data.lesson)
  data.question = mongoose.Types.ObjectId(data.question)
  data.user = res.locals.user._id

  ResultModel
    .create(data)
    .then(response => {
      res.json(response)
    })
    .catch(err => res.status(403).json({ error: err }))
}

function getOwnResults (req, res) {
  ResultModel
    .find({ user: res.locals.user._id })
    .then(results => {
      res.json(results)
    })
    .catch(err => res.status(403).json({ error: err }))
}

function getResults (req, res) {
  ResultModel
    .find({ user: req.params.id })
    .then(results => {
      res.json(results)
    })
    .catch(err => res.status(403).json({ error: err }))
}

module.exports = {
  addAnswer,
  getOwnResults,
  getResults
}