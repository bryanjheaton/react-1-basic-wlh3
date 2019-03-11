import React, { Component } from 'react'

export default class Wolf extends Component {
  constructor() {
    super()
    this.state = {
      isWolfBig: false
    }
  }

  handleClick = () => {
    this.setState({
      isWolfBig: !this.state.isWolfBig
    })
  }

  render() {
    let wolfStyle = this.state.isWolfBig ? { height: 900, width: 800 } : { height: 300, width: 280 }
    return (
      <div>
        <button onClick={this.handleClick}>Toggle Wolf Size</button>
        <img style={wolfStyle} src="https://imgc.allpostersimages.com/img/print/u-g-PT5P2Q0.jpg?w=400&h=400" alt=""/>
      </div>
    )
  }
}
