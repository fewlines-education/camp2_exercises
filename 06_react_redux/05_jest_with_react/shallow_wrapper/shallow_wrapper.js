import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
        </label>
      </div>
    );
  }
}
