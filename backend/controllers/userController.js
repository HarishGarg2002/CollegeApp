const User = require('../models/userModel')

const getUsers = async(req,res) => {
    const users = await User.find().select('-password')
    
    if(users.length == 0) return res.status(400).send({errmsg:"No User found"})

    res.send({users:users,success:true})
}

const getUser = async(req, res) => {
    try{
    const user = await User.findById(req.params.id).select('-password')

    if(!user) return res.status(400).send({errmsg:"User not found",success:false})

    res.send({user:user,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const usersCount = async(req, res) => {
    const count = await User.countDocuments()

    if(!count) return res.status(400).send({errmsg:"No users found",success:false})

    res.send({usersCount:count})
}

const updateUser = async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,{
            ...req.body
        })
        if(user) return res.send({success:true})
        res.status(400).send({errmsg:"User not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const deleteUser = async(req,res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.id)
        if(user) return res.send({success:true})
        res.status(400).send({errmsg:"User not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}


module.exports = {
    getUsers,
    deleteUser,
    getUser,
    updateUser,
    usersCount,
}