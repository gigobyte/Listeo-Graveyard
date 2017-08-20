import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import auth from './routers/auth'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/listeodb', {useMongoClient: true})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/auth', auth)

const port = process.env.PORT || 8081
app.listen(port)
