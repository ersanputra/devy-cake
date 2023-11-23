const express = require("express");
const orderRouter = require("./api/orderRouter");
const orderDetailRouter = require("./api/orderDetailRouter");
const paymentRouter = require("./api/paymentRouter");
const cartRouter = require("./api/cartRouter");
const userRouter = require("./api/userRouter");
const cakeRouter = require("./api/cakeRouter");
const cartItemRouter = require("./api/cartItemRouter");
const addressRouter = require("./api/addressRouter");
const api = express.Router();


api.use("/orders", orderRouter)
api.use("/order-details", orderDetailRouter)
api.use("/payments", paymentRouter)
api.use("/carts", cartRouter)
api.use("/users", userRouter)
api.use("/cakes", cakeRouter)
api.use("/cartitems", cartItemRouter)
api.use("/addresses", addressRouter)


module.exports = api;
