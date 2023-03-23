const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    description:{
        type:String,
        required:true,
        max:120,
        min:10,
    },
    comment:{
        type:String,
        required:true,
    },
    images:[{
        type:String,
    }],
    
})

module.exports = mongoose.model('review',reviewSchema)