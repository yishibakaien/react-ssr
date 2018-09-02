
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import App from './views/App'

import { createStoreMap } from './store/store'

// 让 mobx 在服务端数据渲染的时候不会重复的数据变换
useStaticRendering(true)

/**
 * [description]
 * @param  {[type]} stores 从外部传入的多个 store 实例
 */
export default (stores, routerContext, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)

export {
  createStoreMap
}
