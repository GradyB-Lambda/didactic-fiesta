require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

server.use(express.json())

if(process.env.NODE_ENV === 'production'){
    const cors = require('cors')
    server.use(cors())
}

server.use('*', (req,res) => {
    res.send(`<h1>Working!!!!!!!!</h2>`)
})

const PORT = process.env.PORT || 1234

server.listen(PORT, () => {console.log(`listening on ${PORT}`)})