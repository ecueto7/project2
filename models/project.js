const mongoose = require('mongoose')

// make a schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToBeAdopted: Boolean
  // username: String
})

// make a modal from the schema

const project = mongoose.model('Project', projectSchema)

// export the modal for use in the app
module.exports = project
