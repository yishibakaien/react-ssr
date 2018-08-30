import React from 'react'
import reactDom from 'react-dom'
import App from './App.jsx'

// 服务端渲染不使用 reactDom.render
reactDom.hydrate(<App />, document.getElementById('root'))