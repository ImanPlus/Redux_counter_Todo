import {combineReducers} from "redux";
import counterRDS from "./counterRDS";
import todoRDS from "./todoRDS";

export default combineReducers({
  counterRDS,
  todoRDS,
})