const router = require('express').Router()
const {getProfiles, getProfile, updateUserProfile, updateProfile, deleteProfile} = require('./../views/profileViews')
const {IsAuthenticated} = require('./../utils/keys')

router.get('/', getProfiles)
router.get('/:id', getProfile)
router.put('/edit/profile', IsAuthenticated, updateUserProfile)
router.put('/edit/:id', IsAuthenticated, updateProfile)
router.delete('/delete/:id', IsAuthenticated, deleteProfile)

module.exports = router
