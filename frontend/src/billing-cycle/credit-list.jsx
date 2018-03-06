// React
import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Redux-form
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {

  add(index, item = {}) {
    if(!this.props.readOnly) {
      this.props.arrayInsert('BillingCycleForm', 'credits', index, item)
    }
  }

  remove(index) {
    if(!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('BillingCycleForm', 'credits', index)
    }
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`credits[${index}].name`} component={Input}
          placeholder='Name' readOnly={this.props.readOnly}/></td>
        <td><Field name={`credits[${index}].value`} component={Input}
          placeholder='Value' readOnly={this.props.readOnly}/></td>
        <td className='table-crud__actions'>
          <div className='btn-group'>
            <button type='button' className='btn btn-sm btn-success'
              onClick={() => this.add(index + 1)}>
              <i className='fa fa-plus'></i>
            </button>
            <button type='button' className='btn btn-sm btn-warning'
              onClick={() => this.add(index + 1, item)}>
              <i className='fa fa-clone'></i>
            </button>
            <button type='button' className='btn btn-sm btn-danger'
              onClick={() => this.remove(index)}>
              <i className='fa fa-times'></i>
            </button>
          </div>
        </td>
      </tr>

    ))
  }

  render() {
    return (
      <Grid breakpoints={this.props.breakpoints}>
        <fieldset>
          <legend>Credits</legend>
          <table className='table table-crud'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th className='table-crud__actions'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)
