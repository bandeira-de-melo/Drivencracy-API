import { pollsCollection } from "../database/database.js"

export const pollPostController = async(req, res)=>{
    const newPoll = res.locals.value
    const expireAt = newPoll.expireAt
    console.log("oi")
    try {
        await pollsCollection
        .insertOne({title: newPoll.title, expireAt: expireAt})
        res.status(201).send("Poll created successfully!")
    } catch (err) {
        console.log(err)
        res.status(500).send("Error on the server side.")
    }
}