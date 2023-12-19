
import jwt from "jsonwebtoken"

export const generateJwtToken=(user)=>{

    if(!process.env.JWT_SECRET_KEY)
    {
        return "SECRET_KEY environment variable is not defined"
    }
    const {name,email,role,_id}= user

    const accessToken= jwt.sign(
        {name,email,role},
        process.env.JWT_SECRET_KEY
    
    )
    return accessToken
}