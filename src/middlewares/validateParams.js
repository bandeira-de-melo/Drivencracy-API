export default function validateParams(req, res, next){
    const {id} = req.params
    if(!id) return res.send("The id must be sent by request params")
    res.locals.id = id
    next()
}