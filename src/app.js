import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader'

import App from './views/App'
import AppState from './store/app-state'

// 服务端渲染不使用 ReactDom.render
// ReactDom.hydrate(<App />, document.getElementById('root'))

// eslint-disable-next-line
const initialState = window.__INITIAL__STATE__ || {}

const root = document.getElementById('root')

const render = Component => {
  ReactDom.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
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
