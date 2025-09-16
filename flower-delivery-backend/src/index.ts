import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import shopsRouter from './routes/shops'
import productsRouter from './routes/products'
import ordersRouter from "./routes/orders"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/shops', shopsRouter)
app.use('/api/shops', productsRouter)
app.use("/api/orders", ordersRouter)

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/flower_delivery';
const port = process.env.PORT || 3001;
mongoose.connect(mongoUri).then(() => {
    app.listen(port, () => console.log(`Backend on ${port}`));
});
