const Product = require('../models/productModel')
const Category = require('../models/CategoryModel')
const multer = require('multer')
const _ = require('lodash')



const getProducts = async(req,res) => {
    const products = await Product.find()
    
    if(products.length == 0) return res.status(400).send({errmsg:"No Product found"})

    res.send({products:products,success:true})
}

const getProduct = async(req, res) => {
    try{
    const product = await Product.findById(req.params.id).populate('category')

    if(!product) return res.status(400).send({errmsg:"Product not found",success:false})

    res.send({product:product,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const getProductByName = async (req, res) => {
    let name = req.query.name
    let split = name.split(/,| /)
    console.log(name)

    
    let a = await Product.find({tags:{$all:split}})
    console.log(a)

    // let regex = new RegExp(name,"xi")
    let b = await Product.find({new_name:{$regex:name, $options:'xi'}})
    console.log(b)
    
    let c = await Product.find({new_brand:{$regex:name, $options:'xi'}})
    console.log(c)

    let d = await Product.find({new_description:{$regex:name, $options:'xi'}})
    console.log(d)

    let e = await Product.find({tags:{$in:split}})
    console.log(e)

    // let b = await Product.find({name:{$all:name}})
    // console.log(b)
     
    // let c = await Product.find({description:{$all:name}})
    // console.log(c)
    
    // let d = await Product.find({tags:{$in:name}})
    // console.log(d)
    
    // let e = await Product.find({name.split(" "):{$in:["apple phone"]}})
    // console.log(e)
    
    // let f = await Product.find({description:{$in:name}})
    // console.log(f)

    let array = a.concat(b,c,d,e)

    let products = _.uniqWith(array, _.isEqual);

    if(products.length !== 0) return res.send({products,success:true})

    res.status(500).send({success:false,errmsg:"No products found"})
}

const productsCount = async(req, res) => {
    const count = await Product.countDocuments()

    if(!count) return res.status(400).send({errmsg:"No products found",success:false})

    res.send({productsCount:count})
}

const postProduct = async(req,res) =>{

    const category = await Category.findById(req.body.category)
    if(!category) return res.status(404).send({errmsg:"Invalid category",success:false})

    const pro = await Product.findOne({name:req.body.name})
    if(pro) return res.status(400).send({errmsg:"Product already exists"})

    if(!req.file) res.status(400).send({errmsg:"No file selected",success:"false"})
    const fileName = req.file.filename
    const basePath = "http://192.168.1.4:5000/public/uploads/"

    const new_name = req.body.name.replace(/\s/g,"").toLowerCase()
    const new_brand = req.body.brand.replace(/\s/g,"").toLowerCase()
    const new_description = req.body.description.replace(/\s/g,"").toLowerCase()
    const discountPercentage = Math.floor(((req.body.originalPrice-req.body.discountedPrice)*100)/req.body.originalPrice).toString()
    console.log(discountPercentage)

    const product = new Product({
        ...req.body,
        image:`${basePath}${fileName}`,
        new_name,
        new_brand,
        new_description,
        discountPercentage
    })

    try{
        const p = await product.save()
        res.send({success:true,p})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const updateProduct = async(req, res) => {
    try{
        const category = await Category.findById(req.body.category)
        if(!category) return res.status(404).send({errmsg:"Invalid category",success:false})

        const product = await Product.findByIdAndUpdate(req.params.id,{
            ...req.body
        })
        if(product) return res.send({success:true})
        res.status(400).send({errmsg:"Product not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const updateProductImages = async(req, res) => {
    try{
        const basePath = "http://192.168.1.4:5000/public/uploads/"

        const files =  req.files

        let imagesPath = []

        if(files) files.map(file => imagesPath.push( `${basePath}${file.filename}`))
        

        const product = await Product.findByIdAndUpdate(req.params.id,{
            images : imagesPath
        },{new:true})

        if(product) return res.send({success:true,product})
        res.status(400).send({errmsg:"Some error occured",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const deleteProduct = async(req,res) => {
    try{
        const product = await Product.findByIdAndRemove(req.params.id)
        if(product) return res.send({success:true})
        res.status(400).send({errmsg:"Product not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}


module.exports = {
    getProducts,
    postProduct,
    getProductByName,
    deleteProduct,
    getProduct,
    updateProduct,
    updateProductImages,
    productsCount,
}