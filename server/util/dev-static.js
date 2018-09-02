const path = require('path')
const axios = require('axios')
const webpack = require('webpack')

// api 与 fs 模块一致，它从内存中读取数据
const MemoryFs = require('memory-fs')

const proxy = require('http-proxy-middleware')

const ejs = require('ejs')

const serialize = require('serialize-javascript')

// 这个包是使用 export 这种形式去开发的
const asyncBootstrap = require('react-async-bootstrapper')
const ReactDomServer = require('react-dom/server')

// console.log('asyncBootstrap', asyncBootstrap)

const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/server.ejs')
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
let createStoreMap

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
  createStoreMap = m.exports.createStoreMap
  // console.log('1serverBundle', serverBundle)
  // console.log('1createStoreMap', createStoreMap)
})

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = function(app) {

  // /public 下的资源都代理到 webpack-dev-server 起的服务
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', function(req, res) {
    getTemplate().then(template => {

      const routerContext = {}
      // console.log('2serverBundle', serverBundle)
      // console.log('2createStoreMap', createStoreMap)
      const stores = createStoreMap()
      const app = serverBundle(stores, routerContext, req.url)

      asyncBootstrap(app).then(() => {

        // 如果 routerContext 有 url 则在服务端重定向，要放在 renderToString 后
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        const state = getStoreState(stores)
        const content = ReactDomServer.renderToString(app)

        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(state) // state 是一个对象，渲染到服务端需要序列化
        })

        res.send(html)
        // res.send(template.replace('<!-- slot -->', content))
      })

    })
  })
}
