export default function validateParams(req, res, next){
    const {id} = req.params
    if(!id) return res.send("The poll id must be sen by request params")
    res.locals.pollId = id
    next()
}