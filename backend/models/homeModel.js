const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'homeitems'
    }],
    image:{
        type:String,
    },
    orderProducts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'order'
    }],
    cartProducts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cart'
    }],
    images:[{
        type:String,
    }],
    dateCreated:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('home', homeSchema)