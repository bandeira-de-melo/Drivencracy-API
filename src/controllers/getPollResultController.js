import { ObjectId } from "mongodb"
import { choicesCollection, pollsCollection, votesCollection } from "../database/database.js"

const getPollResultController = async(req, res)=>{
    const pollId = res.locals.id 
    try {
        const poll = await pollsCollection.findOne({_id: ObjectId(pollId)})
        if(!poll) res.status(404).send("Could not find any polls with this Id.")
        
        const choicesForThisPoll = await choicesCollection.find({pollId: ObjectId(pollId)}).toArray()
        
        const choicesId = choicesForThisPoll.map(choice =>  choice._id)

        const votes = await votesCollection.find({}).toArray()

        const listChoicesWithVotes = []

        choicesId.map(choice => {
            listChoicesWithVotes.push({
                choiceId: choice._id,
                votes: 0
            })
        })

        for(let i = 0; i < listChoicesWithVotes.length; i++){
            votes.map(vote => {if(vote.choiceId === listChoicesWithVotes[i].choiceId){
                listChoicesWithVotes[i].votes += 1
            }})
        }

        console.log(listChoicesWithVotes)


       
    res.send("oi")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }
}

export default getPollResultController