import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widgets/value-box'

export default ({credit, debt}) => (
  <Grid breakpoints='12'>
    <fieldset>
      <legend>Summary</legend>
      <Row>
        <ValueBox
          breakpoints='12 4'
          color='green'
          icon='bank'
          value={`R$ ${credit}`}
          text='Total credits'
        />
        <ValueBox
          breakpoints='12 4'
          color='red'
          icon='credit-card'
          value={`R$ ${debt}`}
          text='Total debts'
        />
        <ValueBox
          breakpoints='12 4'
          color='blue'
          icon='money'
          value={`R$ ${credit - debt}`}
          text='Consolidated value'
        />
      </Row>
    </fieldset>
  </Grid>
)
