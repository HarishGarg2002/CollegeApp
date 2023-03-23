var Users = require('../models/userModel')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const register = async (req,res) => {

    const {email,password,phoneNumber,username} = req.body

    const newEmail = await Users.findOne({email: email})
    if(newEmail) return res.status(400).send({errmsg:"User already registered by this email"})
    
    const newUsername = await Users.findOne({username: username})
    if(newUsername) res.status(400).send({errmsg:"User already registered by this username"})
    
    const newPhoneNumber = await Users.findOne({phoneNumber : phoneNumber})
    if(newPhoneNumber) res.status(400).send({errmsg:"User already registered by this PhoneNumber"})

    const hashPassword  = await bcrypt.hashSync(password,10)


    const user = new Users({
        ...req.body,
        password: hashPassword,
    })
    const accessToken = await jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{
        expiresIn : '5d',
    })

    user.save()
    .then(() => {
        res.send(accessToken)
    })
    .catch(error => {
        res.status(400).send({errmsg: error.message})
    })
}

const login = async(req,res) => {
    const {email,password} = req.body
    
    const user = await Users.findOne({email: email})
    if(!user) return res.status(400).send({errmsg:"User not found or email is wrong"})
    
    const result = bcrypt.compareSync(password,user.password)
    if(!result) return res.status(400).send({errmsg:"Password is incorrect"})

    const accessToken = await jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{
        expiresIn : '5d',
    })

    res.json(accessToken)
}

const logout = async(req,res) => {

}

module.exports = {
    login,
    register,
    logout
}