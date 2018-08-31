const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
  
const isDev = process.env.NODE_ENV === 'development'

const app = express()

if (!isDev) {
  /**
   * 这里是由于使用 commonjs2 
   * 所以加了 default 
   */
  const serverEntry = require('../dist/server-entry').default

  // 用 utf8 来指定读出的文件是个 string 否则默认为 buffer
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

  app.use('/public', express.static(path.join(__dirname, '../dist')))
  
  app.get('*', function(req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    const temp = template.replace('<!-- slot -->', appString)
    res.send(temp)
  })
} else {
  const devStatic = require('./util/dev.static.js')
  devStatic(app)
}

app.listen(3333, function() {
  console.log('server is listening on 3333')
})
