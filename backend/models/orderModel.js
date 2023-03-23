const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'orderitems'
        }
    ],
    shippingAddress1:{
        type:String,
        required:true,
    },
    shippingAddress2:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    zip:{
        type:Number,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    totalPrice:{
        type:Number,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    dateOrdered:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        required:true,
        default:'Pending'
    }
})


module.exports = mongoose.model('order',orderSchema)