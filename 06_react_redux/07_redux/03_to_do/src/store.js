import { createStore } from 'redux';
import toDo from './reducers';

const store = createStore(toDo);

export default store;
