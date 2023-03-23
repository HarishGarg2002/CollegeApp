const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    size:{
        type:Number,
    },
    totalPrice:{
        type:Number,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    dateAdded:{
        type:Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model('cart',cartSchema)