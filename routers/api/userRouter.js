const express = require("express");
const userRouter = express.Router();
const UserController = require('../../controllers/userController');
const userController = new UserController();



userRouter.post('/register', userController.createUser);
userRouter.post('/login', userController.login);


module.exports = userRouter;