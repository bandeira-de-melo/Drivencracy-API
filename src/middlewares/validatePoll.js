import dayjs from "dayjs"

export function validatePoll(req, res, next){
    let {title, expireAt} = req.body

    if(!title) return res.status(422).send("Title cannot be an empty string.")

    if(!expireAt) expireAt = (dayjs().add(1, 'months').format("YYYY-MM-DD HH:mm:ss"))

    
    next()
}