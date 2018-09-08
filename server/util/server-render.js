const ejs = require('ejs')
const serialize = require('serialize-javascript')

// 这个包是使用 export 这种形式去开发的
const bootstrap = require('react-async-bootstrapper')
const ReactDomServer = require('react-dom/server')

// 用于给模板添加 title meta 等
const Helmet = require('react-helmet').default

// 服务端渲染 jss 相关配置
const SheetsRegistry = require('react-jss').SheetsRegistry
const create = require('jss').create
const preset = require('jss-preset-default').default
const createMuiTheme = require('@material-ui/core/styles').createMuiTheme
const createGenerateClassName = require('@material-ui/core/styles/createGenerateClassName').default
const colors = require('@material-ui/core/colors')

// console.log(SheetsRegistry)
// console.log(create)
// console.log(preset)

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {

    const createStoreMap = bundle.createStoreMap
    const createApp = bundle.default
    const routerContext = {}
    const stores = createStoreMap()

    // 服务端渲染 jss 相关配置
    const sheetsRegistry = new SheetsRegistry()
    const jss = create(preset())
    jss.options.createGenerateClassName = createGenerateClassName
    const theme = createMuiTheme({
      palette: {
        primary: colors.blue,
        type: 'light'
      }
    })

    const app = createApp(stores, routerContext, sheetsRegistry, jss, theme, req.url)

    bootstrap(app).then(() => {

      // 如果 routerContext 有 url 则在服务端重定向
      if (routerContext.url) {
        res.status(302).setHeader('Location', routerContext.url)
        res.end()
        return
      }
      const helmet = Helmet.rewind()

      const state = getStoreState(stores)
      const content = ReactDomServer.renderToString(app)

      const html = ejs.render(template, {
        appString: content,
        initialState: serialize(state), // state 是一个对象，渲染到服务端需要序列化
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.style.toString(),

        materialCss: sheetsRegistry.toString()
      })

      res.send(html)
      // res.send(template.replace('<!-- slot -->', content))
      resolve()
    })
    .catch(reject)
  })
}
