import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "store/todo/actions";
import { TodoActionTypes } from "store/todo/actions/todo.actions.types";
import * as TODO_ACTION_TYPES from "store/todo/constants";

function* addTodo(action: TodoActionTypes) {}

function* getTodoList() {
  const { data } = yield call(axios.get, "http://localhost:8080/api/todo/main");

  yield put(actions.getTodoListSuccess(data));
}

function* toggleTodoStatus(action: TodoActionTypes) {}

function* removeTodo(action: TodoActionTypes) {}

export function* todoSaga() {
  yield takeLatest(TODO_ACTION_TYPES.ADD_TODO, addTodo);
  yield takeLatest(TODO_ACTION_TYPES.GET_TODO_LIST, getTodoList);
  yield takeLatest(TODO_ACTION_TYPES.TOGGLE_TODO_STATUS, toggleTodoStatus);
  yield takeLatest(TODO_ACTION_TYPES.REMOVE_TODO, removeTodo);
}
