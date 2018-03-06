import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header/header'
import Sidebar from '../common/template/sidebar/sidebar'
import Footer from '../common/template/footer/footer'
import Routes from './routes'
import Toastr from '../common/toastr/toastr'

export default props => (
  <div className='wrapper'>
    <Header icon='money' name={<span><b>My</b> Money</span>}></Header>
    <Sidebar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
    <Toastr />
  </div>
)
