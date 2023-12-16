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

export const deleteItem= async(req,res)=>{
    try{

      const  {_id}= req.body

        const deleteItem= await managerService.deleteItem(_id)
        res.status(200).send({ status: "success", deleteItem });

    }
    catch(err){
        res.status(500).send({ status: "error", message: err.message });
    }
}

export const updateItem= async (req,res)=>{
    try{
      const {id, quantity}= req.body
      console.log(req.body)

      const updatedItem= await managerService.updateItem(id,quantity)

      res.status(200).send({ status: "success",updatedItem})

    }
    catch(err){

        res.status(500).send({ status: "error", message: err.message });

    }
}
