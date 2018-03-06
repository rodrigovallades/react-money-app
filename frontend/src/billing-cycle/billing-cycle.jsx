// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Content, ContentHeader } from '../common/template/content/content'
import { Tabs, TabsHeader, TabsContent, TabHeader, TabContent } from '../common/tabs/tabs'
import { selectTab, showTabs } from '../common/tabs/tab-actions'
import { create } from './billing-cycle-actions'

import List from './billing-cycle-list'
import BillingCycleForm from './billing-cycle-form'

class BillingCycle extends Component {

  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }

  render() {
    return (
      <div>
        <ContentHeader title='Payment cycles' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Create' icon='plus' target='tabCreate' />
              <TabHeader label='Update' icon='pencil' target='tabUpdate' />
              <TabHeader label='Delete' icon='times' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm onSubmit={this.props.create} />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm />
              </TabContent>
              <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
