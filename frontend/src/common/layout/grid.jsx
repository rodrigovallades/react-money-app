import React, { Component } from 'react'

class Grid extends Component {

  toCssClasses(breakpoints) {

    const arrBreakpoints = breakpoints ? breakpoints.split(' ') : ['12']
    let cssClasses = ''

    if (arrBreakpoints[0]) cssClasses += `col-xs-${arrBreakpoints[0]}`
    if (arrBreakpoints[1]) cssClasses += ` col-sm-${arrBreakpoints[1]}`
    if (arrBreakpoints[2]) cssClasses += ` col-md-${arrBreakpoints[2]}`
    if (arrBreakpoints[3]) cssClasses += ` col-lg-${arrBreakpoints[3]}`

    return cssClasses
  }

  render() {
    return (
      <div className={this.toCssClasses(this.props.breakpoints)}>
        {this.props.children}
      </div>
    )
  }
}

export default Grid
