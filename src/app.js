import React from 'react'
import reactDom from 'react-dom'

// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx'

// 服务端渲染不使用 reactDom.render
// reactDom.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')

const render = Component => {
  reactDom.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(App)

/**
 * 热替换相关配置
 */
if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    // eslint-disable-next-line
    const NextApp = require('./App.jsx').default
    render(NextApp)
  })
}
