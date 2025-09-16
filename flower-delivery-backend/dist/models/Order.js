"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model("Order", orderSchema);
