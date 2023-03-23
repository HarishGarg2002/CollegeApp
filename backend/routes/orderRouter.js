const router = require('express').Router()
var orderController =  require('../controllers/orderController')

router.get('/',orderController.getOrders)
router.get('/:id',orderController.getOrder)
router.get('/user/:id',orderController.getOrderUserId)
router.post('/',orderController.addOrder)
router.put('/:id',orderController.updateOrder)
router.delete('/:id',orderController.deleteOrder)

module.exports = router