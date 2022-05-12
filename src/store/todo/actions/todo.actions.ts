import { ITodo } from "store/todo/models/todo.model";
import { TodoActionTypes } from "./todo.actions.types";
import * as TODO_ACTION_TYPES from "store/todo/constants";

export function addTodo(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO,
    payload: todo,
  };
}

export function addTodoSuccess(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function getTodoList(): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.GET_TODO_LIST,
  };
}

export function getTodoListSuccess(todoList: ITodo[]): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.GET_TODO_LIST_SUCCESS,
    payload: todoList,
  };
}

export function toggleTodoStatus(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS,
    payload: todo,
  };
}

export function toggleTodoStatusSuccess(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
    payload: todo,
  };
}

export function removeTodo(id: number): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO,
    payload: id,
  };
}

export function removeTodoSuccess(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
    payload: todo,
  };
}
