const express = require('express')
const { readdirSync } = require('fs')

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

const productRouters = require('./Routes/product')
const authRouters = require('./Routes/auth')

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))

//Routes 3
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/'+ r)))

app.listen(5000, () => console.log('Server is Running on port 5000'))