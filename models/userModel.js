const {Schema, model} = require('mongoose')
const {compareSync} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const Profile = require('./profileModel')
const {secret_jwt} = require('./../utils/keys')

const user = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  password: {type: String, required: true},
  madeAt: {type: Date, default: Date.now()}
})

// user.pre('save', async () => {
//   const profile = new Profile({user: this, name: this.name, email: this.email, username: this.username})
//   profile ? await profile.save() : console.log('Xato')
// })

user.methods.generateAuthToken = () => {
  const token = sign({_id: this._id, username: this.username, isAdmin: this.isAdmin}, secret_jwt, {expiresIn: 60 * 60});
  return token;
}

const User = model('User', user)

module.exports = User
