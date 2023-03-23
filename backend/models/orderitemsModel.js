const mongoose = require('mongoose')

const orderitemsSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    quantity:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('orderitems', orderitemsSchema)