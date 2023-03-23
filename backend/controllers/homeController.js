const Home = require('../models/homeModel')
const Order = require('../models/orderModel')
const Cart = require('../models/cartModel')
const Product = require('../models/productModel')
const HomeItems = require('../models/homeItemsModel')

const getHome = async(req,res) => {
    const home = await Home.find({name:{$ne:"imagesbanner"}}).sort({dateCreated:-1})
    res.send({success:true,home})
}

const getOrders = async(req,res) => {
    const home = await Home.findOne({name:"orders"}).populate({path:'orderProducts',populate:{path:'orderItems',populate:{path:'product',populate:'category'}}})
    let products = home.orderProducts.map(orderProduct => orderProduct.orderItems)
    products = Array.prototype.concat.apply([], products)

    res.send({success:true,products})
}

const postOrders = async(req,res) => {
    try{
        let name = req.route.path.replace("/","")
    
        let type = "banner"
    
        let id = req.body.id
        console.log(id)
    
        let products = await Order.find({user:id})
            .sort({dateOrdered:-1})
        
        console.log(products)
        if(products.length==0) return res.status(400).send({errmsg:"No Products found",success:false})
        
        products = new Home({
            name,
            type,
            orderProducts:products,
        })

        products = await products.save()
        res.send({success:true,products})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const getCart = async(req, res) =>{
    const home = await Home.findOne({name:"cart"}).populate({path:'cartProducts',populate:{path:'product',populate:'category'}})
    const products = home.cartProducts

    res.send({success:true,products})
}

const postCart = async(req,res) => {
    try{
        let name = req.route.path.replace("/","")
    
        let type = "banner"
    
        let id = req.body.id
        console.log(id)

        let products = await Cart.find({user:id})
            .sort({dateAdded:-1})
    
        if(products.length==0) return res.status(400).send({errmsg:"Cart not found",success:false})
        
        let home = new Home({
            name,
            type,
            cartProducts:products,
        }) 

        home = await home.save()
        res.send({home,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const getPrevious = async(req, res) => {

}

const postPrevious = async(req,res) => {
    console.log(req.params)
}

const getProducts = async(req, res) => {
    let id = req.params.id

    const home = await Home.findById(id).populate('items')
    // console.log(home)
    const products = home.items
    res.send(products)
}

const postProducts = async(req,res) => {
     try{
        let name = req.route.path.replace("/","")
    
        let type = "fourdiv"
    
        let id = req.body.i

        let items = Promise.all(req.body.items.map(async (item) => {
            if (item.name){
                const name = item.name
                const product = await Product.find({new_name:{$regex:name,$options:"xi"}})
                console.log(product[0]._id)
                if(product.length!==1) return res.status(400).send({errmsg:"Wrong product name Input",success:false})
              
                let it = new HomeItems({
                    name,
                    products:product[0]
                })

                it = await it.save()

                return it
            }
            if (item.brands){
                const brands = item.brands
                const products = await Product.find({new_brand:{$in:brands}})
               
                if(products.length==0) return res.status(400).send({errmsg:"Wrong brands Input",success:false})
                
                let it = new HomeItems({
                    brands,
                    products
                })

                it = await it.save()

                return it
            }
            if (item.tags){
                const tags = item.tags
                const products = await Product.find({tags:{$all:tags}})

                if(products.length==0) return res.status(400).send({errmsg:"Wrong tags Input",success:false})
                
                let it = new HomeItems({
                    tags,
                    products
                })

                it = await it.save()

                return it
            }
        }))

        items = await items


        let home = new Home({
            name,
            type,
            items
        })

        home = await home.save()
        res.send({home,success:true})
     }
     catch(err){
        res.status(400).send({errmsg:err.message,success:false})
     }
}

const postBanner = async(req, res) =>{
    try{
    let i = await Home.findOne({name:"imagesbanner"})
    if(i) res.status(400).send({errmsg:"Banner already exists",success:false})

    const basePath = "http://192.168.1.4:5000/public/uploads/"

    const files =  req.files
    if(!req.files.length) res.status(400).send({errmsg:"No files selected",success:false})

    let imagesPath = []

    if(files) files.map(file => imagesPath.push( `${basePath}${file.filename}`))

    let name = req.route.path.replace("/","")
    let type = "banner"

    let home = new Home({
        name,
        type,
        images:imagesPath
    })

    home = await home.save()
    res.send({home,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const getBanner = async(req,res) => {
    const images = await Home.findOne({name:"imagesbanner"}).select('images')
    if(!images) return res.status(400).send({errmsg:"No images found",success:false})

    res.send({success:true,images})
}

const deleteBanner = async(req,res) => {
    try{
        const home = await Home.remove({name:"imagesbanner"})

        if(home) return res.send({success:true})

        res.status(400).send({errmsg:"Banner not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}
module.exports = {
    getHome,
    getOrders,
    postOrders,
    getCart,
    postCart,
    getPrevious,
    postPrevious,
    getProducts,
    postProducts,
    postBanner,
    getBanner,
    deleteBanner
}