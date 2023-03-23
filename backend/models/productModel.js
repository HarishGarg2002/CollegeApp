const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    new_name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    new_description:{
        type: String,
        required: true,
    },
    richDescription:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    images:[
        {
            type: String,
        }
    ],
    tags:[
        {
            type: String,
        }
    ],
    brand:{
        type: String,
        required: true,
    },
    new_brand:{
        type: String,
        required: true,
    },
    originalPrice:{
        type: String,
        required: true,
    },
    discountedPrice:{
        type: String,
    },
    discountPercentage:{
        type: String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required: true,
    },
    countInStock:{
        type:Number,
        required: true,
    },
    review:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'review'
        }
    ],
    finalRating:{
        type:String,
    },
    isFeautered:{
        type:Boolean,
        default:false
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('product',productSchema)