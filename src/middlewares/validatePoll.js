import dayjs from "dayjs"

export function validatePoll(req, res, next){
    let {title, expireAt} = req.body

    if(!title) return res.status(422).send("Title cannot be an empty string.")

    if(!expireAt){
        const timeInAMonth = dayjs().add(1, 'months').format("YYYY-MM-DD HH:mm").toString()
        req.body.expireAt = timeInAMonth.replace('T', ' ').replace(':00.000+00:00', '')
    } 

    
    next()
}