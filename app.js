const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//首頁
app.get('/', (req, res) => {
  res.send('test')
})

//認證系統路由
//登錄頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})

//登錄檢查動作
app.post('/users/login', (req, res) => {
  res.send('login action')
})

//註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})

//註冊動作
app.post('/users/register', (req, res) => {
  res.send('register action')
})

//登出
app.get('/users/logout', (req, res) => {
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})