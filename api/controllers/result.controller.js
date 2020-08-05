const ResultModel = require('../models/results.model')

function addAnswer (req, res) {
  const data = req.body
  data.user = res.locals.user._id

  ResultModel
    .create(data)
    .then(response => {
      res.json(response)
    })
    .catch(err => res.status(403).json({ error: err }))
}

module.exports = {
  addAnswer
}