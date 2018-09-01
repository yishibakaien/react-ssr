import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader'
import App from './views/App'

// 服务端渲染不使用 ReactDom.render
// ReactDom.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')

const render = Component => {
  ReactDom.hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root
  )
}

render(App)

/**
 * 热替换相关配置
 */
if (module.hot) {
  module.hot.accept('./views/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./views/App').default
    render(NextApp)
  })
}
