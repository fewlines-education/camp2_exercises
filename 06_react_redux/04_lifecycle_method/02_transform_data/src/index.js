import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import expenses from "./expenses"
import users from "./users"

ReactDOM.render(<App expenses={expenses} users={users} />, document.getElementById('root'));
registerServiceWorker();
