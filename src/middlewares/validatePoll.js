import dayjs from "dayjs"

export function validatePoll(req, res, next){
    const {title, expireAt} = req.body
    if(!title) return res.status(422).send("Title cannot be an empty string.")
    if(!expireAt) console.log(dayjs().format("YYYY/MM/DD").add(dayjs.duration({'months' : 1})))
}