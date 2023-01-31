import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/routes.js'
dotenv.config()

const server = express()
server.use(express.json())
server.use(cors())

server.use(router)



server.listen(process.env.PORT, ()=>{
    console.log(`Server running on PORT: ${process.env.PORT}`)
})