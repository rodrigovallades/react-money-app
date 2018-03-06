// React
import React, { Component } from 'react'

// Redux-form
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/label-and-input'
import { init } from './billing-cycle-actions'
import Itemlist from './item-list'
import Row from '../common/layout/row'
import Summary from './summary'

class BillingCycleForm extends Component {

  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {
    // method handleSubmit comes from redux-form
    const { handleSubmit, readOnly, credits, debts } = this.props
    const { sumOfCredits, sumOfDebts } = this.calculateSummary()

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Row>
            <Field name='name' component={LabelAndInput} readOnly={readOnly}
            label='Name' breakpoints='12 4' placeholder='Name' />
            <Field name='month' component={LabelAndInput} readOnly={readOnly} type='number'
            label='Month (MM)' breakpoints='12 4' placeholder='Month (MM)' />
            <Field name='year' component={LabelAndInput} readOnly={readOnly} type='number'
            label='Year (YYYY)' breakpoints='12 4' placeholder='Year (YYYY)' />
            <Summary credit={sumOfCredits} debt={sumOfDebts} />
            <Itemlist breakpoints='12 12 12 6' list={credits} readOnly={readOnly}
            field='credits' legend='Credits' />
            <Itemlist breakpoints='12 12 12 6' list={debts} readOnly={readOnly}
              field='debts' legend='Debts' showStatus={true} />
          </Row>
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
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
