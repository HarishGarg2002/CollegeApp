var mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique : true,
        required: true,
    },
    email:{
        type: String,
        unique : true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    bookmarks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'product'
        }
    ],
    pincode:{
        type: Number,
    }
})

module.exports = mongoose.model('user',userSchema)