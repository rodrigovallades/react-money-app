import React, { Component } from 'react'

import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import ContentHeader from '../common/template/content/content-header'
import Content from '../common/template/content/content'
import Valuebox from '../common/widgets/value-box'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 1.0' />
        <Content>
          <Row>
            <Valuebox
              breakpoints='12 4'
              color='green'
              icon='bank'
              value='USD 10'
              text='Credits total'
            />
            <Valuebox
              breakpoints='12 4'
              color='red'
              icon='credit-card'
              value='USD 10'
              text='Debit total'
            />
            <Valuebox
              breakpoints='12 4'
              color='blue'
              icon='money'
              value='USD 0'
              text='Consolidated value'
          />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard
