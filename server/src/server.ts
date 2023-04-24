import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import http from 'http'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './connectDB'
import db_con from './connectDB'

import blogRoute from './route/blog'
dotenv.config()

const app = express()

const exp:any = express;
const logger = morgan('dev')

app.use(exp.json())
app.use(cors())
app.use(logger)

app.use('/api',blogRoute)

connectDB();
const httpserver = http.createServer(app)
const port = process.env.PORT || 8080
httpserver.listen(port, () => console.log(`Server listening on port ${port} !`));