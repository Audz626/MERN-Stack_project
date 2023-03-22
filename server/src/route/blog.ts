import express from 'express'
const router = express.Router()
import {create} from '../controller/blogController'

router.post('/create',create)

export default router;