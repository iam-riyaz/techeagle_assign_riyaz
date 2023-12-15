import jwt from "jsonwebtoken"

export const authorisation = (role)=>
async (req, res, next) => 
{

  const token = req.headers.authorization?.split(" ")[1];
  

  if (!token) {
    return res
      .status(404)
      .send({ status: "Not Found", message: "jwt token not found" });
  }

  if (!process.env.JWT_SECRET_KEY) {
    return new Error("secret key not provided by Database");
  }


  try{

    const jwtSecret= process.env.JWT_SECRET_KEY

    const userData=  await jwt.verify(token, jwtSecret)
   if (role===userData.role)
   {
    next()
   }
   else{
    return res.status(403).send({status:"forbidden", message:"user not authorized to access this Route"})
   }

  }catch(err){

    return res.status(500).send({status: "Bad Request", message: err.message})

  }


};
