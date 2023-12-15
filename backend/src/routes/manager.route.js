
import express from "express";
import * as managerController from "../controllers/manager.controller.js"

export const managerRoute= express.Router()

managerRoute.post("/addItem", managerController.addItem)

managerRoute.get("/getItems", managerController.getItems)

managerRoute.delete("/deleteItem", managerController.deleteItem)

managerRoute.patch("/updateItem", managerController.updateItem)