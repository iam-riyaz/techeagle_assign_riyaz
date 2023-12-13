

import * as userService from "../services/user.services.js"
import bcrypt from "bcrypt"

export const signUp=async(req,res)=>{
    try{
     const {name,email,password,address}=req.body
    

     const salt =  bcrypt.genSaltSync(10);
     const hashedPassword =  bcrypt.hashSync(password, salt);
     

     const user= await userService.signUp({name,email,password:hashedPassword,address})
     res.status(201).send({status:"success",user})
        
    }
    catch(err){

    }
}