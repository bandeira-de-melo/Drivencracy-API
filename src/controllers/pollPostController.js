import { pollsCollection } from "../database/database"

export const pollPostController = async(req, res)=>{
    const newPoll = res.locals.value
    try {
        await pollsCollection
        .insertOne({title: newPoll.title, expireAt: newPoll.expireAt})
        res.status(201).send("Poll created successfully!")
    } catch (err) {
        console.log(err)
        res.status(500).send("Error on the server side.")
    }
}