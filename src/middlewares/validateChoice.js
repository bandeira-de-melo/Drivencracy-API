import { ObjectId } from "mongodb"
import dayjs from "dayjs"
import { pollsCollection, choicesCollection } from "../database/database.js"

const validateChoice = async (req, res, next)=>{

        const {title, pollId} = req.body

        if(!title || !pollId) return res.status(422).send("Title and pollId must be sent.")

        const poll = await pollsCollection.findOne({_id: ObjectId(pollId)})
        if(!poll) return res.status(404).send("Could not find any polls with the provided Id.")
        if(dayjs().format("YYYY-MM-DD HH:mm").toString().isAfter(poll.expireAt)) res.status(403).send("The poll limit date has expired.")

        const choice = await choicesCollection.findOne({title})
        if(choice) return res.status(409).send("The choice title already exists.")
       
        //verificar se data do poll já expirou
        
        next()
    
}

export default validateChoice