import {CHECKED, ADD_TASK, UPDATE_TASK,UPDATE_INPUT} from './actions';

const initialState = {
  listTask: [],
  input: ""
};

function toDo(state, action){
  switch(action.type){
    // case ADD_TASK:
    //  return api_jobs(state, state.input).then(image_url => {return {
    //    listTask: [...state.listTask, {text: `${state.input} : `, key: state.listTask.length, url: image_url, finished: false}],
    //    input: ""
    //  }});

    case ADD_TASK:
      // let image_url = api_jobs(state, state.input)
      return {
        listTask: [...state.listTask, {text: `${state.input}`, key: state.listTask.length, url: "", price:"", rating: "", finished: false}],
        input: ""
      }

    case UPDATE_INPUT:
      return {
        ...state,
        input: action.formInput
      }

    case UPDATE_TASK:
      const newTaskArray = [];
      state.listTask.map((element,i) => {
        if(i === action.index){
          state.listTask[action.index].url = action.resultsList[0]
          state.listTask[action.index].price = action.resultsList[1]
          state.listTask[action.index].rating = action.resultsList[2]
        }
        newTaskArray.push(element)
      });
      return {
        ...state,
        listTask: newTaskArray
      }
      // console.log("updated task item : ", state.listTask[action.index].url);
      // state.listTask[action.index].url = action.url
      // console.log("updated task item : ", state.listTask[action.index].url);
      // return {
      //   ...state,
      // }

    case CHECKED:
      const newArray = [];
      state.listTask.map((element,i) => {
        if(i === action.id){
          if(element.finished){newArray.push({text: element.text,url: element.url,price: element.price, rating: element.rating, key: i, finished:false})}
          else{newArray.push({text: element.text,url: element.url, price: element.price, rating: element.rating, key: i, finished:true})}
        }
        else {
          newArray.push(element)
        }
      });
      return {
        ...state,
        listTask: newArray
      }

    default:
      return initialState
  }
}
// (element,i) => {
//   if(i === action.id){return {text: element.text, finished:true}}
//   else {return element}
// }
export default toDo
