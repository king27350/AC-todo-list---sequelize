const express = require('express')
const router = express.Router()
const passport = require('passport')
// 載入 user model
const db = require('../models')
const User = db.User


//登錄頁面
router.get('/login', (req, res) => {
  res.render('login')
})

//登錄檢查動作
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })(req, res, next)
})

//註冊頁面
router.get('/register', (req, res) => {
  res.render('register')
})

//註冊動作
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      console.log('User already exists')
      res.render('register', {
        name, email, password, password2
      })
    } else {
      const newUser = new User({
        name, email, password
      })
      newUser.save().then(user => {
        res.redirect('/')
      }).catch(err => console.log(err))
    }
  })
})

//登出
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router