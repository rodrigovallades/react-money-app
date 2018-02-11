import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header/header'
import Sidebar from '../common/template/sidebar/sidebar'
import Footer from '../common/template/footer/footer'

export default props => (
  <div className='wrapper'>
    <Header icon='money' name={<span><b>My</b> Money</span>}></Header>
    <Sidebar></Sidebar>
    <div className='content-wrapper'>
      <h1>Content</h1>
    </div>
    <Footer></Footer>
  </div>
)
