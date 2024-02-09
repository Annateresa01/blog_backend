const express=require("express")
const signrouter=require("../models/users")

const router=express.Router()

router.post("/user",async(req,res)=>{
    let data=req.body
    //let users=new signrouter(data)
   // let response=await users.save()
    res.json(
        {
            status:"Success"
        }
    )

})

module.exports=router