import { Schema, model } from 'mongoose'

const petSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  kind: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

export default model('pet', petSchema)