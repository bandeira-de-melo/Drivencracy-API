import {Router} from 'express'
import { validatePoll } from '../middlewares/validatePoll.js'

const router = Router()

router.post("/poll", validatePoll)


export default router