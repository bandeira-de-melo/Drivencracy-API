import {Router} from 'express'
import { validatePoll } from '../middlewares/validatePoll'

const router = Router()

router.post("/poll", validatePoll)