import { Schema, model } from 'mongoose'

const roomSchema = new Schema({
  room_number: {
    type: String,
    required: true
  },
  kind: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
})

export default model('room', roomSchema)