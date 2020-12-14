import { Schema, model } from 'mongoose'

const checkinSchema = new Schema({
  room_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  pet_id: {
    type: String,
    required: true
  }
})

export default model('checkin', checkinSchema)