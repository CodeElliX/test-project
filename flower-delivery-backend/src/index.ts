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

const mongoUri = 'mongodb://localhost:27017/flower_delivery'

mongoose.connect(mongoUri)
    .then(() => {
        app.listen(3001, () => {
            console.log('Backend запущений на http://localhost:3001')
        })
    })
    .catch(err => console.error(err))