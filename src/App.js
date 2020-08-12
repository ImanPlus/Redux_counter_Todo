import React from 'react'
import Counter from './Component/Counter';
import TodoInput from "./Component/Todo/TodoInput";
import TodoList from "./Component/Todo/TodoList";
import './css/style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "./Actions/Todo";

function App(props) {
  return (
    <div>
      <Counter/>
      <h1>TODOS</h1>
      <TodoInput addTodo={props.actions.addTodo}/>
      <TodoList todos={props.todos}/>
    </div>
  );
}
function mapStateToProps(state) {
  return{
    todos: state.todoRDS.todos,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

