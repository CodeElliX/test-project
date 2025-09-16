import { Schema, model } from 'mongoose'

const shopSchema = new Schema({
  name: { type: String, required: true }
})

export default model('Shop', shopSchema)