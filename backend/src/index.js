
import { authorisation } from "./middlewares/authorisation.js"
import { userRoute } from "./routes/user.route.js"
import {app} from "./utils/server.js"
import { customerRoute } from "./routes/customer.route.js"
import { managerRoute } from "./routes/manager.route.js"

app.get("/",async(req,res)=>{
    try{
 
        res.status(200).send({message:"route is working fine this is just a test route"})
    }
    catch{

    }
})



app.use("/user", userRoute )

app.use("/customer", authorisation("Customer"), customerRoute)

app.use("/admin", authorisation("Manager"), managerRoute )
