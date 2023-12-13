import { User } from "../models/user.model.js"

export const signUp= async( {name,email,password,address})=>{
    const user= await User.create({name,email,password,address})
     user.save()
     return user
}