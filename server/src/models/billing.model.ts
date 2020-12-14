import { Schema, model } from 'mongoose'

const billingSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  pet_id: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  pay_status: {
    type: String,
    required: true
  },
  discount_id: {
    type: String,
    required: true
  },
})

export default model('billing', billingSchema)