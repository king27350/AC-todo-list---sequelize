const express = require('express')
const router = express.Router()

const db = require('../models')
const User = db.User
const Todo = db.Todo

const { authenticated } = require('../config/auth')

//首頁
router.get('/', authenticated, (req, res) => {
  res.send('all Todo')
})

module.exports = router