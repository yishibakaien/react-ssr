/**
 * 纯前端展示相关 state
 */
import {
  observable,
  computed,
  // autorun,
  action
} from 'mobx'

export default class AppState {
  constructor({ count, name } = { count: 0, name: 'yishibakaien' }) {
    this.count = count
    this.name = name
  }

  @observable count

  @observable name

  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }

  @action add() {
    this.count += 1
  }

  @action changeName = (name) => {
    this.name = name
  }

  // 用在 服务端渲染的时候，将服务端渲染的数据以 JSON 的形式拿到
  toJson() {
    return {
      count: this.count,
      name: this.name
    }
  }
}
