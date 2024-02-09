const express=require("express")
const signrouter=require("../models/users")
const bcrypt=require("bcrypt")

const router=express.Router()

hashedpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

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

module.exports=router