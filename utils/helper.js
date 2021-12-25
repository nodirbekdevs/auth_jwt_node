const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')
const Routes = require('./../routes/main')
const {api_url} = require('./../utils/keys')

const middleware = (app) => {
  app.use(passport.initialize())
  require('./../middleware/passport')(passport)
  app.use(cors())
  app.options('*', cors())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.get('env') === 'development' ? app.use(morgan('dev')) : app.use(helmet())
  app.use(`${api_url}`, Routes)
}

module.exports = middleware
