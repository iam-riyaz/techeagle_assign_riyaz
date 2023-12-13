

import * as userService from "../services/user.services.js"

export const signUp=async(req,res)=>{
    try{
     const {name,email,password,address}=req.body

     const user= await userService.signUp({name,email,password,address})
     res.status(201).send({status:"success",user})
        
    }
    catch(err){

    }
}