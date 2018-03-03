// Dashboard with Redux

import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboard-actions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import ContentHeader from '../common/template/content/content-header'
import Content from '../common/template/content/content'
import Valuebox from '../common/widgets/value-box'

class Dashboard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const { credit, debt } = this.props.summary

    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 1.0' />
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

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
