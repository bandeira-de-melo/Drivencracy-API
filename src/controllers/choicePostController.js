import { ObjectId } from "mongodb"
import { pollsCollection, choicesCollection } from "../database/database.js"


const choicePostController = async(req, res)=>{
    const {title, pollId} = res.locals.value
    try {
        const poll = await pollsCollection.findOne({_id: ObjectId(pollId)})
        if(!poll) return res.status(404).send("Could not find any polls with the provided Id.")

        const choice = await choicesCollection.find({title})
        if(choice) return res.status(409).send("The choice title already exists.")

        await choicesCollection.insertOne({title, pollId})

        
    } catch (error) {
        
    }

}