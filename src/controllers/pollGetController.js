import { pollsCollection } from "../database/database.js"

export const pollGetController = async(req, res)=>{
    try {
        const pollsArray = await pollsCollection.find().toArray()
        if(!pollsArray) res.status(404).send("No polls registered.")
        res.status(200).send(pollsArray)
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }
}