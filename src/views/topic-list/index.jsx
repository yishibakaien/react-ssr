import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import { AppState } from '../../store/app.state'

@inject('appState') @observer
class TopicList extends React.Component {

  static defaultProps = {
    appState: {
      changeName: ''
    }
  }

  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {}

  changeName(event) {
    const { appState: { changeName } } = this.props
    changeName(event.target.value)
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        {appState.msg}
      </div>
    )
  }
}

TopicList.propTypes = {
  // eslint-disable-next-line
  appState: PropTypes.instanceOf(AppState)
}

export default TopicList
