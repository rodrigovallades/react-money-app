import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/content/content-header'
import Content from '../common/template/content/content'
import { Tabs, TabsHeader, TabsContent, TabHeader, TabContent } from '../common/tabs/tabs'
import { selectTab } from '../common/tabs/tab-actions'

class BillingCycle extends Component {

  componentWillMount() {
    this.props.selectTab('tabList')
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
              <TabContent id='tabList'><h1>List</h1></TabContent>
              <TabContent id='tabCreate'><h1>Create</h1></TabContent>
              <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
              <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
