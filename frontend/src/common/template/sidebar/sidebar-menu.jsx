import React from 'react'
import MenuItem from './sibebar-menu-item'
import MenuTreeItem from './sibebar-menu-tree'

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='dashboard'></MenuItem>
    <MenuTreeItem label='Register' icon='edit'>
      <MenuItem path='#billing-cycles' label='Payment cycles' icon='usd'></MenuItem>
    </MenuTreeItem>
  </ul>
)
