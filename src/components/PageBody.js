import React, { Component } from 'react';

const styles = {
  bodyStyle: {
    textAlign: "justify",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    left: "25%",
    width: "50%",
    position: "relative"
  },

};

export default class PageBody extends Component {

  render() {
    let { bodyStyle } = styles;
    return (
      <div style={bodyStyle}>
        {this.props.children}
      </div>
    )
  }

}
