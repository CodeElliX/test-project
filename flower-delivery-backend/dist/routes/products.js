"use strict";
// import express from 'express'
// import Product from '../models/Product'
// import mongoose from 'mongoose'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const Product_1 = __importDefault(require("../models/Product"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router({ mergeParams: true });
router.get("/:shopId/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sort } = req.query;
        let sortOption = {};
        if (sort === "price") {
            sortOption = { price: 1 };
        }
        else if (sort === "date") {
            sortOption = { createdAt: -1 };
        }
        const shopObjectId = new mongoose_1.default.Types.ObjectId(req.params.shopId);
        const products = yield Product_1.default.find({ shop: shopObjectId }).sort(sortOption);
        res.json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Не вдалося отримати товари" });
    }
}));
exports.default = router;
