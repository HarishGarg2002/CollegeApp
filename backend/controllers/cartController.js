const Cart = require('../models/cartModel')
const Product = require('../models/productModel')
const User= require('../models/userModel')

const getCarts = async(req,res) => {
    const carts = await Cart.find()
        .populate({path:'product',populate:'category'})
    
    if(carts.length == 0) return res.status(400).send({errmsg:"No Cart found"})

    res.send({carts:carts,success:true})
}

const getCart = async(req, res) => {
    try{
    const cart = await Cart.findById(req.params.id)
        .populate({path:'product',populate:'category'})

    if(!cart) return res.status(400).send({errmsg:"Cart not found",success:false})

    res.send({cart:cart,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const getCartUserId = async(req, res) => {
    try{
    const items = await Cart.find({user:req.params.id})
        .populate({path:'product',populate:'category'})

    const netPrice = items.reduce((a,b)=>a+b.totalPrice,0)

    if(items.length==0) return res.status(400).send({errmsg:"Cart not found",success:false})

    res.send({items,success:true,price:netPrice})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const addCart = async(req, res) => {
    try{
    const user = await User.findById(req.body.user)
    if(!user) return res.status(400).send({errmsg:"Wrong User id",success:false})

    const p = await Product.findById(req.body.product).select('discountedPrice')
    const totalPrice = p.discountedPrice * req.body.quantity

    const product = new Cart({
        ...req.body,
        totalPrice
    })

    const pr = await product.save()
    res.send({success:true,cart:pr})
    }
    catch(err){
        res.status(500).send({errmsg:err,success:false})
    }
}

const cartsCount = async(req, res) => {
    const count = await Cart.countDocuments()

    if(!count) return res.status(400).send({errmsg:"No Carts found",success:false})

    res.send({CartsCount:count})
}

const updateCart = async(req, res) => {
    try{
        if(req.body.user){
        const user = await User.findById(req.body.user)
        if(!user) return res.status(400).send({errmsg:"Wrong User id",success:false})
        }

        const old_cart = await Cart.findById(req.params.id).populate({path:'product',populate:'category'})
        console.log(old_cart)
        let totalPrice = old_cart.totalPrice

        if(req.body.quantity || req.body.product){
            let discountedPrice
            let quantity

            if(!req.body.product) {discountedPrice = old_cart.product.discountedPrice}
            if(!req.body.quantity) {quantity = old_cart.quantity}
            
            if (req.body.product){
            const p = await Product.findById(product).select('discountedPrice')
            console.log(p)
            discountedPrice = p.discountedPrice
            }
            if(req.body.quantity){
                quantity = req.body.quantity
            }

            totalPrice = discountedPrice * quantity
        }

        const cart = await Cart.findByIdAndUpdate(req.params.id,{
            ...req.body,
            totalPrice:totalPrice
        },{new:true})
        if(cart) return res.send({success:true,cart})
        res.status(400).send({errmsg:"Cart not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const deleteCart = async(req,res) => {
    try{
        const cart = await Cart.findByIdAndRemove(req.params.id)
    
        if (cart) res.send({success:true})

        res.status(400).send({errmsg:"Cart not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}


module.exports = {
    getCarts,
    addCart,
    getCartUserId,
    deleteCart,
    getCart,
    updateCart,
    cartsCount,
}