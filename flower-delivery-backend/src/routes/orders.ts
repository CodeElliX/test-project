import express from "express"
import Order from "../models/Order"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        console.log("New order:", req.body);
        const order = new Order(req.body)
        await order.save()
        res.status(201).json(order)
    } catch (err) {
        res.status(500).json({ error: "Не вдалося зберегти замовлення" })
    }
})

export default router
