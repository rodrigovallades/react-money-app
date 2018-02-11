import React, { Component } from 'react'

import ContentHeader from '../common/template/content/content-header'
import Content from '../common/template/content/content'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 1.0' />
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard
