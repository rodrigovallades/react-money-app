import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header/header'
import Sidebar from '../common/template/sidebar/sidebar'
import Footer from '../common/template/footer/footer'
import Routes from './routes'

export default props => (
  <div className='wrapper'>
    <Header icon='money' name={<span><b>My</b> Money</span>}></Header>
    <Sidebar></Sidebar>
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer></Footer>
  </div>
)
