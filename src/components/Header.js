import React, { Component } from 'react';

const styles = {
  navStyle: {
    top: 0,
    backgroundColor: "lightgray",
    height: 45,
    verticalAlign: 'middle',
    lineHeight: '40px'
  },
  anchorStyle: {
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    fontSize: 25,
    backgroundColor: "darkgray",
    color: 'blue',
    marginRight: 10,
    boxShadow: "10px 5px 5px black",
    borderRadius: 10
  }
};

export default class Header extends Component {

  render() {
    let { navStyle, anchorStyle } = styles;
    return (
      <nav style={navStyle}>
        <a style={anchorStyle} href="">Home</a>
        <a style={anchorStyle} href="">About us</a>
        <a style={anchorStyle} href="">Services</a>
        <a style={anchorStyle} href="">Pricing</a>
        <a style={anchorStyle} href="">Contact</a>
      </nav>
    )
  }

}
