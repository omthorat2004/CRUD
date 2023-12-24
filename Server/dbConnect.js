const mongoose = require('mongoose')

const connectToDB = ()=>{
mongoose.connect("mongodb://localhost:27017/ReduxCRUD").then(()=>{

console.log("Database connected")
})
}


module.exports=connectToDB