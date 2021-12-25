const bcryptjs = require('bcryptjs')
const User = require('./../models/userModel')
const {salt} = require('./../utils/keys')

const login = async (req, res) => {
  const {username, password} = req.body
  const candidate = await User.findOne({username: username})
  if (candidate) {
    const passwordResult = bcryptjs.compareSync(password, candidate.password);
    if (passwordResult) {
      const token = candidate.generateAuthToken();
      res.status(200).json({token: `Bearer ${token}`})
    } else {
      res.status(401).json({message: 'Пароли не совпадают. Попробуйте снова'})
    }
  } else {
    res.status(404).json({message: 'Пользователь с таким email не найден'})
  }
}

const register = async (req, res) => {
  const {name, email, username, isAdmin, password} = req.body
  const candidate = await User.findOne({username: username})
  if (candidate) {
    res.status(409).json({message: 'Такой email уже занят. Попробуйте другой'})
  } else {
    const user = new User({name, email, username, isAdmin, password: bcryptjs.hashSync(password, salt)})
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = {login, register}
