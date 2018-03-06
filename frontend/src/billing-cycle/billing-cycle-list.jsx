// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from './billing-cycle-actions'

class BillingCycleList extends Component {

    componentWillMount() {
      this.props.getList()
      console.log(this.props.list)
    }

    renderRows() {
      const list = this.props.list || []
      return list.map(cycle => (
        <tr key={cycle._id}>
          <td>{cycle.name}</td>
          <td>{cycle.month}</td>
          <td>{cycle.year}</td>
        </tr>
      ))
    }

    render() {
      return (
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
