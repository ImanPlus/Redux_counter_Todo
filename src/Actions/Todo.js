export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = title => {
  return ({type: ADD_TODO, title})

}
export const completeTodo = id => {
  return ({type: COMPLETE_TODO, id})

}
export const deleteTodo = id => {
  return ({type: DELETE_TODO, id})

}
