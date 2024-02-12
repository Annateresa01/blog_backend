const express=require("express")
const signrouter=require("../models/users")
const bcrypt=require("bcrypt")


const router=express.Router()

hashedpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}
router.get("/viewall",async(req,res)=>{
    let data=await signrouter.find()
    res.json(data)
})
router.post("/user",async(req,res)=>{
    //let data=req.body
    //let users=new signrouter(data)
    //let response=await users.save()
    let {data}={"data" :req.body}
    let password=data.password
    hashedpasswordgenerator(password).then(
        (hashedpassword)=>
        {console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
             let users=new signrouter(data)
            let response= users.save()
            res.json(
                {
                    status:"Success"
                }
            )
        

        }
    )

})

router.post("/signin",async(req,res)=>{
let input=req.body
let emailid=req.body.emailid
let data=await signrouter.findOne({"emailid":emailid})
if(!data){
    return res.json(
        {
            status:"invalid emailid"
        }
    )
}
console.log(data)
let dbpassword=data.password
let inputpassword=req.body.password
console.log(dbpassword)
console.log(inputpassword)
const match=await bcrypt.compare(inputpassword,dbpassword)
if(!match)
{
 return res.json(
    {
        status:"Incorrect"
    }
)
}
else{
res.json(
    {
        status:"Success","userdata":data
    }
)
}


})
module.exports=router