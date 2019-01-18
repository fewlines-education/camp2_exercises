import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    let array = [0,1,2,3,4,5,6,7,8,9];
    this.state = {
      numbersList: array,
      isIncreasing: true
    }
  }

  listItem(array, flag){
    console.log(array,flag);
    if(flag){
      let numbers = array.map((number) => <li>{number}</li>);
      return numbers;
    } else {
      let numbers = Array.from(array).reverse().map((number) => <li>{number}</li>);
      return numbers;
    }
  }

  render() {

    return (
      <div className="App">

        <button someprop={[this.state.isIncreasing]} onClick={() => this.setState({isIncreasing: !this.state.isIncreasing})}>
          Button 2
        </button>
        <div>flag is : {this.state.isIncreasing}</div>
        <ul>{this.listItem(this.state.numbersList, this.state.isIncreasing)}</ul>

      </div>
    );
  }
}

export default App;
