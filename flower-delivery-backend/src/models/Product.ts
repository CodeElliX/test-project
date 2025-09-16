import { Schema, model, Types } from 'mongoose'

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  shop: { type: Types.ObjectId, ref: 'Shop', required: true },
  createdAt: { type: Date, default: Date.now },
})

export default model('Product', productSchema)