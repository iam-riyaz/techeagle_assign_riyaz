import { Item } from "../models/inventoryItem.model.js";

export const addItem= async(data)=>{
    const {productName, productImage, productDescription, weight, quantity,price}= data;

    const item= await Item.create(data)
    item.save()
    return item
}