import React, { Component } from 'react';

const styles = {
  footerStyle: {
    bottom: 0,
    position: 'absolute',
    width: "100%",
    backgroundColor: "lightgray",
    height: 40,
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  parStyle: {
    display: 'inline',
    marginRight: 15
  }
};

export default class Footer extends Component {

  render() {
    let {footerStyle, parStyle} = styles;
    return (
      <footer style={footerStyle}>
        <p style={parStyle}>Posted by: Tanner Plauché</p>
        <p style={parStyle}>Contact information: <a href="mailto:example@example.com">
          someone@example.com</a>.</p>
      </footer>
    )
  }

}
