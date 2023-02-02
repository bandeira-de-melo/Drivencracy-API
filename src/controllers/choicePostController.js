import { ObjectId } from "mongodb"
import { choicesCollection } from "../database/database.js"


const choicePostController = async(req, res)=>{
    const {title, pollId} = res.locals.value
    
    try {
        await choicesCollection.insertOne({title, pollId: ObjectId(pollId)})  
        res.status(201).send("A choice was created.")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }

}

export default choicePostController