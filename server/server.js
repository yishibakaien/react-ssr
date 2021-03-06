const express = require('express')
const favicon = require('serve-favicon')
// const ReactSSR = require('react-dom/server')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path')

const serverRender = require('./util/server-render')

const isDev = process.env.NODE_ENV === 'development'

const app = express()

// 把 application/json 格式转换成 URL query 形式
app.use(bodyParser.json())

// 创建 application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid', // cookieId 的名字
  resave: false, // 每次请求是否新生产一个 cookieId
  saveUninitialized: false,
  secret: 'yishibakaien' // 用此字符串去加密 cookie 防止浏览器端 cookie 被解密
}))

app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use('/api/user', require('./util/handle-login.js'))

app.use('/api', require('./util/proxy.js'))

if (!isDev) {
  /**
   * 这里是由于使用 commonjs2 
   * 所以加了 default 
   */
  const serverEntry = require('../dist/server-entry')

  // 用 utf8 来指定读出的文件是个 string 否则默认为 buffer
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8')

  app.use('/public', express.static(path.join(__dirname, '../dist')))
  
  app.get('*', function(req, res, next) {
    serverRender(serverEntry, template, req, res).catch(next)
  })
} else {
  const devStatic = require('./util/dev-static.js')
  devStatic(app)
}

// express 处理全局错误中间件，必须传 4 个参数
app.use(function(err, req, res, next) {
  console.log(err),
  res.status(500).send(err)
})

app.listen(3333, function() {
  console.log('server is listening on 3333')
})
