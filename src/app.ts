import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

export const app = express()

dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))



