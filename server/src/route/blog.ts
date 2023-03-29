import express from 'express'
const router = express.Router()
import {create, getBlogs, getSingleBlogs} from '../controller/blogController'

router.post('/create',create)
router.get('/blogs',getBlogs)
router.get('/blog/:slug',getSingleBlogs)

export default router;