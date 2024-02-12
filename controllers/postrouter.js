const express=require("express")
const postmodel=require("../models/postmodel")
const router=express.Router()

router.post("/addpost",async(req,res)=>{
let data=req.body
let posts=new postmodel(data)
let response=await posts.save()
res.json(
    {
        status:"Success"
    }
)
})
router.get("/view",async(req,res)=>{
    let data=await postmodel.find()
    .populate("userId","name age mobno adrs emailid -_id")
    .exec()
    res.json(data)
})

module.exports=router