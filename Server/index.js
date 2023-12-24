const express  = require('express')
const cors = require('cors')
const connectToDB = require('./dbConnect')
const User = require('./User.js')

const app = express()

connectToDB()
app.use(cors())
app.use(express.json())


app.get("/",async(req,res)=>{
   const users = await User.find({})
   res.status(200).json({users:users})
})

app.post("/addContact",async (req,res)=>{
    const {name,lastName,contact} = req.body
    const users = await User.find({})
   

    await User.create({
        id:users.length==0?1:users[users.length-1].id+1,
        name:name,
        lastName:lastName,
        contact:contact
    })
    res.json({success:true})
})
app.put("/updateContact/:id",async (req,res)=>{
    const {name,lastName,contact} = req.body
    const id = req.params.id
    await User.updateOne({id:id},{name,lastName,contact})
})

app.delete("/delete/:id",async(req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    await User.deleteOne({id:id})
    res.json({success:true,id:id})
})

app.post("/addArray",async(req,res)=>{
   const {users} = req.body
   const newUsers = await User.insertMany(users)
   res.json({succes:true})

})

app.listen(3000,(req,res)=>{
    console.log("Server Started")
})