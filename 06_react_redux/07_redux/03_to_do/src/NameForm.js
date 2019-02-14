import React from 'react';
import store from './store'
import {addTask, updateInput} from './actions';


export default function NameForm(){
  return (
    <div>
      <form>
        <label>
          Enter Task:
          <input type="text" value={store.getState().input} onChange={handleChange}/>
        </label>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
// onSubmit={this.handleSubmit}
// value={this.state.value} onChange={this.handleChange}

function handleChange(event) {
  store.dispatch(updateInput(event.target.value));
}

function handleSubmit() {
  
  store.dispatch(addTask());
}
