import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    customer: {
        name: String,
        email: String,
        phone: String,
        address: String,
    },
    items: [
        {
            _id: String,
            name: String,
            price: Number,
            count: Number,
        },
    ],
    totalPrice: Number,
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Order", orderSchema)
