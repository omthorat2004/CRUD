const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    lastName:{type:String},
    contact:{type:String}
})

const User = mongoose.model("User",userSchema)

module.exports = User
