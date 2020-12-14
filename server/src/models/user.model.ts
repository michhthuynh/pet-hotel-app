import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  birthday: {
    type: Date,
    required: true,
  },
  register_date: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 0
  },
})

export default model('user', userSchema)