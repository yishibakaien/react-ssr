const path = require('path')
const axios = require('axios')
const webpack = require('webpack')

// api 与 fs 模块一致，它从内存中读取数据
const MemoryFs = require('memory-fs')

const proxy = require('http-proxy-middleware')
const ReactDomServer = require('react-dom/server')


const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

const Module = module.constructor

const mfs = new MemoryFs()

const serverCompliler = webpack(serverConfig)

serverCompliler.outputFileSystem = mfs

let serverBundle
serverCompliler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )

  const bundle = mfs.readFileSync(bundlePath, 'utf8')
  
  // hack 操作，将 webpack 输出的字符串转换为模块
  const m = new Module()
  m._compile(bundle, 'server-entry.js') // 必须制定文件名

  // 获取 m 暴露的模块
  serverBundle = m.exports.default
})

module.exports = function(app) {

  // /public 下的资源都代理到 webpack-dev-server 起的服务
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', function(req, res) {
    getTemplate().then(template => {
      const content = ReactDomServer.renderToString(serverBundle)
      res.send(template.replace('<!-- slot -->', content))
    })
  })
}
