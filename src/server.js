import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

const apiRouter = express.Router()

// We declare a router, but if not conected to our app whichi is actually listening for something, nothing will happen
apiRouter.get('/', (req, res) => res.json({api: true}))
apiRouter.get('*', (req, res) => res.json({apiAll: true}))

setupMiddware(app)
connect()
// setup basic routing for index route

app.use('/signin', signin)

// So we connect the router here
app.use('/api', apiRouter)

// catch all
app.all('*', (req, res) => {
  res.json({ok: false})
})

export default app
