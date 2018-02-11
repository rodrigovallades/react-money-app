import React from 'react'

export default props => (
  <header className='main-header'>
    <a href='#' className='logo'>
      <span className='logo-mini'><b>My</b>M</span>
      <span className='logo-log'>
        <i className={`fa fa-${props.icon}`}></i> {props.name}
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href='#' className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
)
