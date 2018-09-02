const path = require('path')
const axios = require('axios')
const webpack = require('webpack')

// api 与 fs 模块一致，它从内存中读取数据
const MemoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')

const serverRender = require('./server-render')

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

// const Module = module.constructor
const NativeModule = require('module')
const vm = require('vm')

const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename,
    dispalyErrors: true
  })

  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)

  return m
}

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
  // const m = new Module()
  // m._compile(bundle, 'server-entry.js') // 必须制定文件名

  const m = getModuleFromString(bundle, 'server-entry.js')

  // 获取 m 暴露的模块
  serverBundle = m.exports
})


module.exports = function(app) {
  // /public 下的资源都代理到 webpack-dev-server 起的服务
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', function(req, res, next) {
    getTemplate().then(template => {
      return serverRender(serverBundle, template, req, res)
    })
    .catch(next)
  })
}
