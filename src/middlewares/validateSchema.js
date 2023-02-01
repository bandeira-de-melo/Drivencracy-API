export default function validateSchema(schema){
    return (req, res, next)=>{
        const {error, value} = schema.validate(req.body,{abortEarly: false})

        if(error) return res.status(422).send(error.details.map(err => err.message))

        res.locals.value = value

        next()
    }
}