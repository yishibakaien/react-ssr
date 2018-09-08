import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Button from '@material-ui/core/Button'

import AppState from '../../store/app-state'

@inject('appState') @observer
class TopicList extends React.Component {

  static defaultProps = {
    appState: {
      changeName: a => a
    }
  }

  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {}

  bootstrap() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }
  
  changeName(event) {
    const { appState: { changeName } } = this.props
    changeName(event.target.value)
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <Helmet>
          <title>this is topic list</title>
          <meta name="discription" content="This is description" />
        </Helmet>
        <Button variant="raised" color="primary">this is a button</Button>
        <input type="text" onChange={this.changeName} />
        {appState.msg}
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default TopicList
