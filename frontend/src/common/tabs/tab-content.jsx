import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'

class TabContent extends Component {
  render() {
    const selected = this.props.tabs.selected === this.props.id
    const visible = this.props.tabs.visible[this.props.id]
    return (
      <If test={visible}>
        <div id={this.props.id}
          className={`tab-pane ${selected ? 'active' : ''}`}>
          {this.props.children}
        </div>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tabs: state.tabs })
export default connect(mapStateToProps)(TabContent)
