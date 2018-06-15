/*eslint no-console: 0*/
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import compression from 'compression'
import bodyParser from 'body-parser'
import initializeRouting from './routes'
import jwtMiddleware from './middlewares/jwt'

const app = express()

mongoose.connect(process.env.LISTEO_DB)

mongoose.Promise = global.Promise

mongoose.connection.on('error', (err) => {
    console.log(`${err.name}: ${err.message}`)
})

app.use(compression())
app.use(express.static(path.join(__dirname, '..', 'client-dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(jwtMiddleware)

initializeRouting(app)

app.listen(process.env.LISTEO_PORT || 3000)

console.log(`Listening on port ${process.env.LISTEO_PORT || 3000}`)
