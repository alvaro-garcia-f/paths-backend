const PracticeModel = require ('../models/practice.model')

function updateQuestionInterval (req, res) {
  const data = req.body
  data.user = res.locals.user._id
  data.question = req.params.id
  data.user = res.locals.user._id

  PracticeModel
    .findOneAndUpdate(
      { user: res.locals.user._id, question: req.params.id }, 
      data, 
      {upsert: true, new: true, runValidators: true})
    .then(response => { 
      res.json(response)
    })
    .catch(err => console.error(err))
}

function getAllIntervals (req,res) {

  PracticeModel
    .find({ user: res.locals.user._id})
    .then(intervals => res.json(intervals))
    .catch(err => console.error(err))

}

function getQuestionInterval (req,res) {

  PracticeModel
    .find({ user: res.locals.user._id, question: req.params.id })
    .then(intervals => res.json(intervals))
    .catch(err => console.error(err))

}


module.exports = {
  updateQuestionInterval,
  getAllIntervals,
  getQuestionInterval
}