const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const db = require('./models')
const Todo = db.Todo
const User = db.User

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//首頁
app.get('/', (req, res) => {
  res.send('test')
})

//使用路由
app.use('/users', require('./routes/users'))

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})