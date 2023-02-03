import { ObjectId } from "mongodb"
import { choicesCollection, pollsCollection } from "../database/database.js"
import dayjs from "dayjs"

const validateChoiceVote = async (req, res, next)=>{

    const {id} = req.params
    try {
        
        const choice = await choicesCollection.findOne({_id: ObjectId(id)})
        if(!choice) return res.status(404).send("Could not find any choices with the provided Id.")

        const poll= await pollsCollection.findOne({_id: ObjectId(choice.pollId)})
        const now = dayjs().format("YYYY-MM-DD HH:mm")
        //utilizar diff do dayjs pra comparar datas
        
        
        res.locals.choice = choice
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }
 
    next()

}

export default validateChoiceVote