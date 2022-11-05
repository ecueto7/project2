const Project = require('../models/project')

const dataController = {
  // Index,
  index (req, res, next) {
    Project.find({ username: req.session.username }, (err, foundProjects) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.projects = foundProjects
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.project = deletedProject
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.readyToBeAdopted = req.body.readyToBeAdopted === 'on'
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProject) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.project = updatedProject
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.readyToBeAdopted = req.body.readyToBeAdopted === 'on'
    req.body.username = req.session.username
    Project.create(req.body, (err, createdProject) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.project = createdProject
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Project.findById(req.params.id, (err, foundProject) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a project with that ID'
        })
      } else {
        res.locals.data.project = foundProject
        next()
      }
    })
  }
}

module.exports = dataController