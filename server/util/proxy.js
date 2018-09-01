// 发向 cnode 的接口全部代理出去
const router = require('express').Router()
const axios = require('axios')
const circularJson = require('circular-json')

const baseUrl = 'http://cnodejs.org/api/v1'

module.exports = function(req, res, next) {
  const path = req.path
  // req = circularJson.stringify(req)

  console.log('req', req)
  // 判断用户是否登录
  const user = req.session.user || {}

  const needAccessToken = req.query.needAccessToken

  if (needAccessToken && user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  const query = Object.assign({}, req.query)
  if (query.needAccessToken) delete query.needAccessToken
  // console.log(`${baseUrl}${path}`)
  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, {
      accesstoken: user.accessToken
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(resp => {
    console.log('then', resp.data)
    if (resp.status === 200) {
      res.send(resp.data)
    } else {
      res.status(resp.status).send(resp.data)
    }
  }).catch(err => {
    console.log('err', err.response)
    if (err.response) {
      // 服务器错误状态码
      res.status(500).send(err.response.data)
    } else {
      // 默认错误
      res.status(500).send({
        success: false,
        meg: '未知错误'
      })
    }
  })
}
