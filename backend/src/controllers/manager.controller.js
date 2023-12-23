import { Item } from "../models/inventoryItem.model.js";
import * as managerService from "../services/manager.services.js";

export const addItem = async (req, res) => {
  try {
    const item = await managerService.addItem(req.body);

    res.status(201).send({ status: "success", item });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await managerService.getItems();
    res.status(200).send({ status: "success", items });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const deleteItem = await managerService.deleteItem(itemId);
    res.status(200).send({ status: "success", deleteItem });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const itemId = req.params.itemId;
    console.log({ itemId, quantity });

    const updatedItem = await managerService.updateItem(itemId, quantity);

    res.status(200).send({ status: "success", updatedItem });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

// testing methods

export const testController = async (req, res) => {
  try {

     const items= await Item.find({quantity:{$gt:200}},{productName:1})
     res.status(200).send({items})

  } catch (err) {
    res.status(500).send({status: "error", message: err.message})
  }
};
