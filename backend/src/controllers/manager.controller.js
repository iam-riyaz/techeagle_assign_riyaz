
import * as managerService from "../services/manager.services.js"

export const addItem= async(req,res)=>{
    try{

        const item= await managerService.addItem(req.body)

        res.status(201).send({status:"success", item})

    }
    catch(err){
        res.status(500).send({status:"error", message: err.message})

    }
}