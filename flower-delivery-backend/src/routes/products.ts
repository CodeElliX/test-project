// import express from 'express'
// import Product from '../models/Product'
// import mongoose from 'mongoose'

// const router = express.Router()

// router.get('/:shopId/products', async (req, res) => {
//   const shopId = req.params.shopId
//   const products = await Product.find({ shop: new mongoose.Types.ObjectId(shopId) })
//   res.json(products)
// })

// export default router


// import express from "express";
// import Product from "../models/Product";

// const router = express.Router({ mergeParams: true });

// router.get("/:shopId/products", async (req, res) => {
//     try {
//         const { sort } = req.query;

//         let sortOption = {};
//         if (sort === "price") {
//             sortOption = { price: 1 };
//         } else if (sort === "date") {
//             sortOption = { createdAt: -1 };
//         }

//         const products = await Product.find({ shop: req.params.shopId }).sort(sortOption);
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ error: "Не вдалося отримати товари" });
//     }
// });

// export default router;

import express from "express";
import Product from "../models/Product";
import mongoose from "mongoose";

const router = express.Router({ mergeParams: true });

router.get("/:shopId/products", async (req, res) => {
  try {
    const { sort } = req.query;

    let sortOption: any = {};
    if (sort === "price") {
      sortOption = { price: 1 };
    } else if (sort === "date") {
      sortOption = { createdAt: -1 };
    }

    const shopObjectId = new mongoose.Types.ObjectId(req.params.shopId);
    const products = await Product.find({ shop: shopObjectId }).sort(sortOption);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Не вдалося отримати товари" });
  }
});

export default router;
