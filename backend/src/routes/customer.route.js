
import * as customerController from "../controllers/customer.controller.js"
import express from "express";

export const customerRoute= express.Router();



customerRoute.get("/getItems", customerController.getItems)