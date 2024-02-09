const mongoose=require("mongoose")

const postmodel=new mongoose.Schema(

{
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"blogs"
    },
    post:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}
)
module.exports=mongoose.model("posts",postmodel)