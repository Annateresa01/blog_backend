const mongoose=require("mongoose")
const usermodel=mongoose.Schema(
    {
        name:String,
        age:String,
        mobno:String,
        adrs:String,
        pincode:String,
        emailid:String,
        password:String

    }
)
module.exports=mongoose.model("blogs",usermodel)