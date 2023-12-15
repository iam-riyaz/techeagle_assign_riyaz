
export const getItems= async(req,res)=>{


    try{

        res.status(200).send({status:"success"})
    }
    catch(err){
     res.status(err.status).send({status:"error"})
    }


}