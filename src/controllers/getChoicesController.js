import { ObjectId } from "mongodb"
import { choicesCollection } from "../database/database.js"

const getChoicesController = async (req, res)=>{
    const pollId = res.locals.id
    try {
        const choicesByPollId = await choicesCollection.find({pollId: ObjectId(pollId)}).toArray()
        if(!choicesByPollId) return res.status(404)
        res.send(choicesByPollId.map(choice => choice ))
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }

}

export default getChoicesController