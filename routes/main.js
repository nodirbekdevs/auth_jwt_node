const express = require('express')
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const profileRoutes = require('./profileRoutes')
const {IsAuthenticated} = require('./../utils/keys')

const main = express()

main.use('/auth', authRoutes)
main.use('/users', IsAuthenticated, userRoutes)
main.use('/profiles', profileRoutes)

module.exports = main
