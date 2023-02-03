import dayjs from "dayjs"
import { ObjectId } from "mongodb"
import { votesCollection } from "../database/database.js"

const votePostController = async (req, res)=>{
    const choice = res.locals.choice

    try {
        await votesCollection.insertOne({createdAt:dayjs().format('YYYY-MM-DD HH:mm'), choiceId: ObjectId(choice._id)})
        res.status(201).send("Choice voted successfully!")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }
}

export default votePostController