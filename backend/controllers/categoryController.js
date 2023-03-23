const Category = require('../models/CategoryModel')

const getCategories = async(req,res) => {
    const categories = await Category.find()
    
    if(categories.length == 0) return res.status(400).send({errmsg:"No Category found"})

    res.send({categories:categories,success:true})
}

const getCategory = async(req, res) => {
    try{
    const category = await Category.findById(req.params.id)

    if(!category) return res.status(400).send({errmsg:"Category not found",success:false})

    res.send({category:category,success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const postCategory = async(req,res) =>{

    const cat = await Category.findOne({name:req.body.name})
    if(cat) return res.status(400).send({errmsg:"Category already exists"})

    if(!req.file) res.status(400).send({errmsg:"No file selected",success:"false"})
    const fileName = req.file.filename
    const basePath = "http://192.168.1.4:5000/public/uploads/"

    const category = new Category({
        ...req.body,
        image:`${basePath}${fileName}`
    })

    try{
        await category.save()
        res.send({success:true})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const updateCategory = async(req, res) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            image: req.body.image
        })
        if(category) return res.send({success:true,category})
        res.status(400).send({errmsg:"Category not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}

const deleteCategory = async(req,res) => {
    try{
        const category = await Category.findByIdAndRemove(req.params.id)
        if(category) return res.send({success:true})
        res.status(400).send({errmsg:"Category not found",success:false})
    }
    catch(err){
        res.status(400).send({errmsg:err.message,success:false})
    }
}


module.exports = {
    getCategories,
    postCategory,
    deleteCategory,
    getCategory,
    updateCategory,
}