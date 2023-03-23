const router = require('express').Router()
const productController =  require('../controllers/productController')
const multer = require('multer')

const FILE_TYPE_MAP = {
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
    'image/png': 'png',
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype]
        let uploadError = new Error('Invalid image type')

        if(isValid) {
            uploadError = null
        }
        cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.replace(" ","-")
      const extension = FILE_TYPE_MAP[file.mimetype]
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })
  
const uploadOptions = multer({ storage: storage })

router.get('/',productController.getProducts)
router.get('/:id',productController.getProduct)
router.get('/get/search',productController.getProductByName)
router.get('/get/count',productController.productsCount)
router.put('/:id',productController.updateProduct)
router.put('/product-images/:id',uploadOptions.array('images',10),productController.updateProductImages)
router.post('/',uploadOptions.single('image'),productController.postProduct)
router.delete('/:id',productController.deleteProduct)

module.exports = router