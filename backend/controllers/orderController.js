const Order =  require('../models/orderModel')
const OrderItem = require('../models/orderitemsModel')

const getOrders = async(req,res) => {
    const orders = await Order.find()
        .populate('user','username')
        .populate({path:'orderItems',populate:{path:'product',populate:'category'}})
        .sort({dateOrdered:-1})
    
    if(orders.length == 0) return res.status(400).send({errmsg:"No Order found"})

    res.send({orders:orders,success:true})
}

const getOrder = async(req, res) => {
    try{
    const order = await Order.findById(req.params.id)
        .populate('user','username')
        .populate({path:'orderItems',populate:{path:'product',populate:'category'}})

    if(!order) return res.status(400).send({errmsg:"Order not found",success:false})

    res.send({order:order,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const getOrderUserId = async(req, res) => {
    try{
    const items = await Order.find({user:req.params.id})
        .populate({path:'orderItems',populate:{path:'product',populate:'category'}}).sort({dateOrdered:-1})


    const netPrice = items.reduce((a,b)=>a+b.totalPrice,0)

    if(items.length==0) return res.status(400).send({errmsg:"Order not found",success:false})

    res.send({items,success:true,price:netPrice})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const addOrder = async(req, res) => {
    const orderItems = Promise.all(req.body.orderItems.map(async orderItem => {
        let item = new OrderItem({...orderItem})
        item = await item.save()

        return item._id
    }))

    const orderItemsIds = await orderItems

    let totalPrice = await Promise.all(orderItemsIds.map(async (orderItem) => {
        const orderIt = await OrderItem.findById(orderItem).populate('product','discountedPrice')
        const totalP = Math.floor(orderIt.product.discountedPrice) * orderIt.quantity
        return totalP
    }))

    totalPrice = totalPrice.reduce((a,b)=>a+b,0)


    const order = new Order({
        ...req.body,
        orderItems:orderItemsIds,
        totalPrice:totalPrice,
    })

    try{
        const o = await order.save()
        res.send({success:true,order:o})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const ordersCount = async(req, res) => {
    const count = await Order.countDocuments()

    if(!count) return res.status(400).send({errmsg:"No orders found",success:false})

    res.send({ordersCount:count})
}

const updateOrder = async(req, res) => {
    try{
        const order = await Order.findByIdAndUpdate(req.params.id,{
            status:req.body.status
        })
        if(order) return res.send({success:true})
        res.status(400).send({errmsg:"Order not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const deleteOrder = async(req,res) => {
    try{
        const order = await Order.findByIdAndRemove(req.params.id)
        if(order) {
            await order.orderItems.map(async (orderItem) => {
                await OrderItem.findByIdAndRemove(orderItem)
            })
            return res.send({success:true})
        } 

        res.status(400).send({errmsg:"Order not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}


module.exports = {
    getOrders,
    addOrder,
    getOrderUserId,
    deleteOrder,
    getOrder,
    updateOrder,
    ordersCount,
}