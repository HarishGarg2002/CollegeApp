const mongoose = require('mongoose')

const homeitemsSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    brands:[{
        type:String,
    }],
    tags:[{
        type:String,
    }],
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }]
})

module.exports = mongoose.model('homeitems',homeitemsSchema)