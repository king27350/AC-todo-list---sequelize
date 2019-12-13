const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth')

//全部 Todo
router.get('/', authenticated, (req, res) => {
  res.send('all todos')
})

//新增一筆 Todo 的頁面 
router.get('/new', authenticated, (req, res) => {
  res.send('add todo page')
})

//新增一筆 動作
router.post('/new', authenticated, (req, res) => {
  res.send('new action')
})

//顯示一筆 Todo 資料
router.get('/:id', authenticated, (req, res) => {
  res.send('show one todo detail')
})

//修改特定 Todo 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('edit one todo page')
})

//修改特定 Todo 動作
router.put('/:id', authenticated, (req, res) => {
  res.send('edit action')
})

//刪除
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('delete')
})

module.exports = router