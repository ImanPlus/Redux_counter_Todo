import {ADD_TODO} from '../Actions/Todo';

const initialState = {
  todos: [],
};


const handleAddTodo = (state, action) => {
  const {todos} = state;
  return {
    ...state,
    todos: [...todos, {
      id: todos.length + 1,
      text: action.title,
      isComplete: false,
    }]
  }
}

export default function todoRDS(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return handleAddTodo(state, action)
    default:
      return state
  }

}

