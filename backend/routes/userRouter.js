const router = require('express').Router()
var userController =  require('../controllers/userController')

router.get('/',userController.getUsers)
router.get('/:id',userController.getUser)
router.get('/get/count',userController.usersCount)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router