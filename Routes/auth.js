const express = require('express')
const router = express.Router()

// http://localhost:5000/api/auth
router.get('/auth',(req,res) => {
    res.send('Hello auth Endpoint')
})

module.exports = router