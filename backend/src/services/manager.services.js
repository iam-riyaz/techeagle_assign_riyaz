import { Item } from "../models/inventoryItem.model.js";

export const addItem = async (data) => {
  const {
    productName,
    productImage,
    productDescription,
    weight,
    quantity,
    price,
  } = data;

  const item = await Item.create(data);
  item.save();
  return item;
};

export const getItems = async () => {
  const allItems = await Item.find();
  return allItems;
};

export const deleteItem= async (_id)=>{
    const deleteItem= await Item.findByIdAndDelete({_id})
    return deleteItem
}

export const updateItem= async({_id,quantity})=>{
    const item= await Item.findByIdAndUpdate(_id,{$set:{quantity:quantity}},{new:true})
    
    return item;


}
