import {Router} from 'express'
import { validatePoll } from '../middlewares/validatePoll.js'
import validateSchema from '../middlewares/validateSchema.js'
import { pollPostSchema } from '../schemas/pollPostSchema.js'

const router = Router()

router.post("/poll", validatePoll, validateSchema(pollPostSchema))


export default router