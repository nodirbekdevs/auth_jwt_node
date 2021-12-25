const {genSaltSync} = require('bcryptjs')
const passport = require('passport')
const Extract = require('passport-jwt').ExtractJwt

const PORT = 1000
const api_url = '/api'
const mongo_url = 'mongodb://localhost/auth'
const mongo_options = {useNewUrlParser: true, useUnifiedTopology: true}
const salt = genSaltSync(10)
const secret_jwt = 'dev-jwt'
const IsAuthenticated = passport.authenticate('jwt', {session: false})
const passport_options = {jwtFromRequest: Extract.fromAuthHeaderAsBearerToken(), secretOrKey: secret_jwt}

module.exports = {PORT, api_url, mongo_url, mongo_options, salt, secret_jwt, IsAuthenticated, passport_options}
