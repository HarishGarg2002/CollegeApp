require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const AuthRouter = require('./routes/authRouter')
const CategoryRouter = require('./routes/categoryRouter')
const ProductRouter = require('./routes/productRouter')
const UserRouter = require('./routes/userRouter')
const OrderRouter = require('./routes/orderRouter')
const HomeRouter = require('./routes/homeRouter')
const CartRouter = require('./routes/cartRouter')
const cors = require('cors')
const authJwt = require('./middleware/jwt')

var app = express()

app.use(express.json())
app.use(cors())
app.options('*',cors())
// app.use(authJwt())
app.use('/public/uploads',express.static(__dirname+ '/public/uploads'))
app.use("/",AuthRouter)
app.use("/category",CategoryRouter)
app.use("/product",ProductRouter)
app.use("/user",UserRouter)
app.use('/order',OrderRouter)
app.use('/home',HomeRouter)
app.use('/cart',CartRouter)

const uri = process.env.MONGODB_URI
mongoose.connect(uri,(error) => {
    if (error) {
        return console.log(error)
    }

    console.log("Connected to MongoDB")
})

app.post('/',(req,res) => {
         
            res.send(req.body)
        })
        
const port = process.env.PORT || 5000
app.listen(port,
    () => console.log(`Server is running on port ${port}`))