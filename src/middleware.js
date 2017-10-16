import bodyParser from 'body-parser'

const setGlobalMiddleware = (app) => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
  app.use(bodyParser.json())

}

export default setGlobalMiddleware
