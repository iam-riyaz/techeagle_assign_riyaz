import { User } from "../models/user.model.js"

export const signUp= async( {name,email,password,address})=>{
    const user= await User.create({name,email,password,address})
     user.save()
     return user
}

export const getUserByEmail= async({email})=>{
    const user= await User.findOne({email})
    return user
}