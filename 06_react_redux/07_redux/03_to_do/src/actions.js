export const CHECKED = "CHECKED";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_TASK = "UPDATE_TASK";

export function addTask(){
  return {
    type: ADD_TASK
  }
}

export function updateInput(input){
  return {
    type: UPDATE_INPUT,
    formInput: input
  }
}

export function updateTask(resultsList, index){
  // console.log("here resultsList is : ", resultsList);
  return {
    type: UPDATE_TASK,
    resultsList: resultsList,
    index: index
  }
}

export function checked(index){
  return {
    type: CHECKED,
    id: index
  }
}
