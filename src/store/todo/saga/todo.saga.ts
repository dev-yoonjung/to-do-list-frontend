import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "store/todo/actions";
import { TodoActionTypes } from "store/todo/actions/todo.actions.types";
import * as TODO_ACTION_TYPES from "store/todo/constants";

function* addTodo(action: TodoActionTypes) {}

function* toggleTodoStatus(action: TodoActionTypes) {}

function* removeTodo(action: TodoActionTypes) {}

export function* todoSaga() {
  yield takeLatest(TODO_ACTION_TYPES.ADD_TODO, addTodo);
  yield takeLatest(TODO_ACTION_TYPES.TOGGLE_TODO_STATUS, toggleTodoStatus);
  yield takeLatest(TODO_ACTION_TYPES.REMOVE_TODO, removeTodo);
}
