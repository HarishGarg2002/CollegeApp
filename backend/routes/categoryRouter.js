const router = require('express').Router()
var categoryController =  require('../controllers/categoryController')
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

router.get('/',categoryController.getCategories)
router.get('/:id',categoryController.getCategory)
router.put('/:id',categoryController.updateCategory)
router.post('/',uploadOptions.single('image'),categoryController.postCategory)
router.delete('/:id',categoryController.deleteCategory)

module.exports = router