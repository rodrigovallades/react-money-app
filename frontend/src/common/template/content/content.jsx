import React from 'react'
import ContentHeader from './content-header'

const Content = props => (
  <section className='content'>{props.children}</section>
)

export { Content, ContentHeader }
