import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'

const server = express()
server.use(express.json())
server.use(cors())

server.use(router)



server.listen(5000, ()=>{
    console.log(`Server running on PORT: 5000`)
})