import express from 'express'
import Shop from '../models/Shop'

const router = express.Router()

router.get('/', async (req, res) => {
  const shops = await Shop.find()
  res.json(shops)
})

export default router