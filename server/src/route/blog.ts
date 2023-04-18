import express from 'express'
const router = express.Router()
import {create, getBlogs, getSingleBlogs, remove} from '../controller/blogController'

router.post('/create',create)
router.get('/blogs',getBlogs)
router.get('/blog/:slug',getSingleBlogs)
router.delete('/blog/:slug',remove)

export default router;