import express from 'express'
const router = express.Router()
import {create, getBlogs} from '../controller/blogController'

router.post('/create',create)
router.get('/blogs',getBlogs)

export default router;