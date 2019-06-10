import React, { Component } from 'react';
import './App.css';
import ChatBot from "./ChatBot"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChat: true
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={() =>
          this.setState({displayChat: !this.state.displayChat})
        }>Toggle Chat</button>
        {this.state.displayChat
          ? <ChatBot />
          : null
        }
      </div>
    );
  }
}

export default App;
