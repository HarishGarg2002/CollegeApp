const router = require('express').Router()
var authController =  require('../controllers/authController')

router.post('/register',authController.register)
router.post('/login',authController.login)
router.post('/logout',authController.logout)
module.exports = router