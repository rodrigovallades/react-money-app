import React from 'react'
import TabsHeader from './tabs-header'
import TabsContent from './tabs-content'
import TabHeader from './tab-header'
import TabContent from './tab-content'

const Tabs = props => (
  <div className='nav-tabs-custom'>
    {props.children}
  </div>
)

export { Tabs, TabsHeader, TabsContent, TabHeader, TabContent }
