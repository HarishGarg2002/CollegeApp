const router = require('express').Router()
const cartController = require('../controllers/cartController')

router.get('/',cartController.getCarts)
router.get('/:id',cartController.getCart)
router.get('/user/:id',cartController.getCartUserId)
router.post('/',cartController.addCart)
router.put('/:id',cartController.updateCart)
router.delete('/:id',cartController.deleteCart)

module.exports = router