const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
// 載入 user model
const db = require('../models')
const User = db.User


//登錄頁面
router.get('/login', (req, res) => {
  res.render('login', { style: 'login.css' })
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
  res.render('register', { style: 'login.css' })
})

//註冊動作
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  // 加入錯誤訊息提示
  let errors = []

  if (!name || !email || !password || !password2) {
    errors.push({ message: '所有欄位都是必填' })
  }

  if (password !== password2) {
    errors.push({ message: '密碼輸入錯誤' })
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
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

        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash

            newUser.save().then(user => {
              res.redirect('/')
            }).catch(err => console.log(err))
          })
        )
      }
    })
  }
})

//登出
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已經成功登出')
  res.redirect('/')
})

module.exports = router