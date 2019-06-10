import React, { Component } from "react";

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    setInterval(this.sayHello, 1000);
  }
  sayHello() {
    this.setState({
      messages: [...this.state.messages, "Hey there!"]
    });
  }
  render() {
    return (
      <div>
        {this.state.messages.map((message, index) =>
          <div key={index}>{message}</div>
        )}
      </div>
    )
  }
}

export default ChatBot;
