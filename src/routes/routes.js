import {Router} from 'express'
import choicePostController from '../controllers/choicePostController.js'
import getChoicesController from '../controllers/getChoicesController.js'
import { pollGetController } from '../controllers/pollGetController.js'
import { pollPostController } from '../controllers/pollPostController.js'
import votePostController from '../controllers/votePostController.js'
import validateChoice from '../middlewares/validateChoice.js'
import validateChoiceVote from '../middlewares/validateChoiseVote.js'
import validateParams from '../middlewares/validateParams.js'
import { validatePoll } from '../middlewares/validatePoll.js'
import validateSchema from '../middlewares/validateSchema.js'
import choiceSchema from '../schemas/choiceSchema.js'
import { pollPostSchema } from '../schemas/pollPostSchema.js'

const router = Router()

router.post("/poll", validatePoll, validateSchema(pollPostSchema), pollPostController)
router.get("/poll", pollGetController)

router.post("/choice", validateChoice, validateSchema(choiceSchema), choicePostController)
router.get("/poll/:id/choice", validateParams, getChoicesController)

router.post("/choice/:id/vote", validateParams, validateChoiceVote, votePostController)

export default router