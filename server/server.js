const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')

/**
 * 这里是由于使用 commonjs2 
 * 所以加了 default 
 */
const serverEntry = require('../dist/server-entry').default  

// 用 utf8 来指定读出的文件是个 string 否则默认为 buffer
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

const app = express()

app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get('*', function(req, res) {
  const appString = ReactSSR.renderToString(serverEntry)
  const temp = template.replace('<!-- content slot -->', appString)
  res.send(temp)
})

app.listen(3333, function() {
  console.log('server is listening on 3333')
})
