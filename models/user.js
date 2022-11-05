const mongoose = require('mongoose')

const { Schema, model } = mongoose

// make schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// make model
const User = model('User', userSchema)

      module.exports = User