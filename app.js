const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signuprouter=require("./controllers/signuprouter")
const postroute=require("./controllers/postrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anna07:anna@cluster0.a7na4kg.mongodb.net/blogsDb?retryWrites=true&w=majority",
{
  useNewUrlParser:true
}
)

app.use("/api/blog",signuprouter)
app.use("/api/posts",postroute)


app.listen(3001)