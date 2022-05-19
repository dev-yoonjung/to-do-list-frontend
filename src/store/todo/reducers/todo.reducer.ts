import produce from "immer";

import * as TODO_ACTION_TYPES from "store/todo/constants";
import { ITodo } from "store/todo/models/todo.model";
import {
  TodoActionTypes,
  IGetTodoSuccessAction,
  IGetTodoAction,
  IRemoveTodoAction,
  IFailedAction,
} from "store/todo/actions/todo.actions.types";

import { message } from "antd";

interface ITodoReducerInterface {
  todos: ITodo[];
  loaded: boolean;
}

export const initialState: ITodoReducerInterface = {
  todos: [],
  loaded: false,
};

export const todoReducer = (
  state = initialState,
  action:
    | TodoActionTypes
    | IGetTodoAction
    | IGetTodoSuccessAction
    | IRemoveTodoAction
    | IFailedAction
) => {
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return produce(state, (draft) => {
        draft.loaded = false;
      });
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      message.success("Todo added.");
      return produce(state, (draft) => {
        draft.todos.push(action.payload);
        draft.loaded = true;
      });
    case TODO_ACTION_TYPES.GET_TODO_LIST:
      return produce(state, (draft) => {
        draft.loaded = false;
      });
    case TODO_ACTION_TYPES.GET_TODO_LIST_SUCCESS:
      return produce(state, (draft) => {
        draft.todos = action.payload;
        draft.loaded = true;
      });
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS:
      return produce(state, (draft) => {
        draft.loaded = false;
      });
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      message.info("Todo state updated.");
      return produce(state, (draft) => {
        const index = draft.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index > -1) {
          const todo = draft.todos[index];
          todo.completed = action.payload.completed;
        }
        draft.loaded = true;
      });
    case TODO_ACTION_TYPES.REMOVE_TODO:
      return produce(state, (draft) => {
        draft.loaded = false;
      });
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      message.warn("Todo removed.");
      return produce(state, (draft) => {
        const index = draft.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        draft.todos.splice(index, 1);
        draft.loaded = true;
      });
    case TODO_ACTION_TYPES.FAILED:
      message.error("Occurs error.");
      return produce(state, (draft) => {
        draft.loaded = true;
      });
    default:
      return state;
  }
};
