import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import morgan from 'morgan'
export const app = express()

dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}





