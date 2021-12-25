const Profile = require('./../models/profileModel')
const User = require('./../models/userModel')

const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({}).populate('user')
    if (!profiles) res.status(409).send('Mistake')
    res.status(200).send(profiles)
  } catch (e) {res.status(404).send(e)}
}

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id).populate('user')
    if (!profile) res.status(409).send('Mistake')
    res.status(200).send(profile)
  } catch (e) {res.status(404).send(e)}
}

const updateUserProfile = async (req, res) => {
  const {
    name, email, username, location, shortIntro, bio,
    profileImage, socialGithub, socialTwitter, socialLinkedIn, socialYoutube, socialWebsite
  } = req.body
  const user = await User.findById(req.user._id)
  try {
    const profile = await Profile.findOneAndUpdate(
      {user: user},
      {
        name, email, username, location, shortIntro, bio,
        profileImage, socialGithub, socialTwitter, socialLinkedIn, socialYoutube, socialWebsite
      },
      {new: true}
    )
    if (!profile) res.status(409).send('Mistake')
    res.status(200).send(profile)
  } catch (e) {res.status(404).send(e)}
}

const updateProfile = async (req, res) => {
  const {
    name, email, username, location, shortIntro, bio,
    profileImage, socialGithub, socialTwitter, socialLinkedIn, socialYoutube, socialWebsite
  } = req.body
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        name, email, username, location, shortIntro, bio,
        profileImage, socialGithub, socialTwitter, socialLinkedIn, socialYoutube, socialWebsite
      },
      {new: true}
    )
    if (!profile) res.status(409).send('Mistake')
    res.status(200).send(profile)
  } catch (e) {res.status(404).send(e)}
}

const deleteProfile = async (req, res) => {
  Profile.findByIdAndDelete(req.params.id).then(book => {
    if (book) return res.status(500).json({success: true, message: 'O`chirildi'})
    else return res.status(500).json({success: true, message: 'O`chirilmadi'})
  }).catch(error => {return res.status(400).json({success: false, error: error})})
}

module.exports = {getProfiles, getProfile, updateUserProfile, updateProfile, deleteProfile}
