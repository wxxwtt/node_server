const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded 

const router = require('./router/index.js')
app.use(router)

//配置art-template 模版引擎
app.engine('html', require('express-art-template'));
// 配置静态资源
app.use('/public', express.static('public'))

app.listen(3000,function () {
  console.log('server listening on port 3000')
})