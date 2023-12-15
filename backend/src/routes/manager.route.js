
import express from "express";
import * as managerController from "../controllers/manager.controller.js"

export const managerRoute= express.Router()

managerRoute.post("/addItem", managerController.addItem)