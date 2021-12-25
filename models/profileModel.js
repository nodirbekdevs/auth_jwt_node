const {Schema, model} = require('mongoose')

const Profile = model('Profile', new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true},
  email: {type: String, required: true},
  username: {type: String, required: true},
  location: {type: String},
  shortIntro: {type: String},
  bio: {type: String},
  profileImage: {type: String, default: ''},
  socialGithub: {type: String},
  socialTwitter: {type: String},
  socialLinkedIn: {type: String},
  socialYoutube: {type: String},
  socialWebsite: {type: String},
  madeAt: {type: Date, default: Date.now()}
}))

module.exports = Profile
