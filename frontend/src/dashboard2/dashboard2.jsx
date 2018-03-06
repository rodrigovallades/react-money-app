// Dashboard without Redux

import React, { Component } from 'react'
import axios from 'axios'

import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import { Content, ContentHeader } from '../common/template/content/content'
import Valuebox from '../common/widgets/value-box'

const BASE_URL = 'http://localhost:3003/api'

class Dashboard2 extends Component {

  constructor(props) {
    super(props)
    this.state = { credit: 0, debt: 0}
  }

  componentWillMount() {
    axios.get(`${BASE_URL}/billingCycles/summary`)
      .then(res => this.setState(...this.state, res.data))
  }

  render() {
    const { credit, debt } = this.state

    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 0.9 (without Redux)' />
        <Content>
          <Row>
            <Valuebox
              breakpoints='12 4'
              color='green'
              icon='bank'
              value={`${credit} USD`}
              text='Total credit'
            />
            <Valuebox
              breakpoints='12 4'
              color='red'
              icon='credit-card'
              value={`${debt} USD`}
              text='Total debit'
            />
            <Valuebox
              breakpoints='12 4'
              color='blue'
              icon='money'
              value={`${credit - debt} USD`}
              text='Consolidated value'
          />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard2
