// React
import React, { Component } from 'react'

// Redux-form
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/label-and-input'
import { init } from './billing-cycle-actions'
import CreditList from './credit-list'

class BillingCycleForm extends Component {

  render() {
    // method handleSubmit comes from redux-form
    const { handleSubmit, readOnly, credits } = this.props

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <div className="row">
            <Field name='name' component={LabelAndInput} readOnly={readOnly}
            label='Name' breakpoints='12 4' placeholder='Name' />
            <Field name='month' component={LabelAndInput} readOnly={readOnly} type='number'
            label='Month (MM)' breakpoints='12 4' placeholder='Month (MM)' />
            <Field name='year' component={LabelAndInput} readOnly={readOnly} type='number'
            label='Year (YYYY)' breakpoints='12 4' placeholder='Year (YYYY)' />
            <CreditList breakpoints='12 6' list={credits} readOnly={readOnly} />
          </div>
        </div>
        <div className='box-footer'>
          <div className='btn-group'>
            <button type='submit' className='btn btn-primary'>{this.props.submitLabel}</button>
            <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
          </div>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({form: 'BillingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('BillingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
