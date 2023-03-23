const router = require('express').Router()
const homeController = require('../controllers/homeController')
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

router.get('/',homeController.getHome)
router.get('/orders', homeController.getOrders)
router.post('/orders', homeController.postOrders)
router.get('/cart', homeController.getCart)
router.post('/cart', homeController.postCart)
router.get('/previous', homeController.getPrevious)
router.post('/previous', homeController.postPrevious)
router.get('/products/:id', homeController.getProducts)
router.post('/products', homeController.postProducts)
router.post('/imagesbanner',uploadOptions.array('images',4), homeController.postBanner)
router.get('/imagesbanner',homeController.getBanner)
router.delete('/imagesbanner',homeController.deleteBanner)

module.exports = router 