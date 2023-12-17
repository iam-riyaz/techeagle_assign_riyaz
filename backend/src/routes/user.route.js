import * as userController from "../controllers/user.controller.js"

import express from "express";

export const userRoute= express.Router();

userRoute.post("/signup", userController.signUp)

userRoute.post("/login", userController.login)


