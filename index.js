require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Router/router')
require('./DB/connection')

const regServer = express()

regServer.use(cors())
regServer.use(express.json())
regServer.use(router)

const PORT = 3000

regServer.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);
})

regServer.get('/',(req,res)=>{
    res.send("<h1>Server Started... Waiting for client request</h1>")
})

