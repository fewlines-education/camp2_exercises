import React, { Component } from 'react';
import './snapshot.css';

const fetch = require("node-fetch");

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};



class Link extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <a class={this.state.class} href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </a>
    )
  }
}

export default class App extends Component {

  render(){
    return (
      <Link page="https://www.facebook.com">Facebook</Link>
    )
  }
}
