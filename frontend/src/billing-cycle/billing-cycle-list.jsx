// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, remove } from './billing-cycle-actions'

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
          <td className='table-crud__actions'>
            <div className='btn-group'>
              <button className='btn btn-sm btn-warning' onClick={() => this.props.showUpdate(cycle)}>
                <i className='fa fa-pencil'></i>
              </button>
              <button className='btn btn-sm btn-danger' onClick={() => this.props.remove(cycle)}>
                <i className='fa fa-times'></i>
              </button>
            </div>
          </td>
        </tr>
      ))
    }

    render() {
      return (
        <div>
          <table className='table table-crud'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Year</th>
                <th className='table-crud__actions'>Actions</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
