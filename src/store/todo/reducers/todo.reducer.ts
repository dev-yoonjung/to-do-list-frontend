import produce from "immer";

import * as TODO_ACTION_TYPES from "store/todo/constants";
import { ITodo } from "store/todo/models/todo.model";
import {
  TodoActionTypes,
  IGetTodoSuccessAction,
} from "store/todo/actions/todo.actions.types";

interface ITodoReducerInterface {
  todos: ITodo[];
}

export const initialState: ITodoReducerInterface = {
  todos: [],
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes | IGetTodoSuccessAction
) => {
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      return produce(state, (draft) => {
        draft.todos.push(action.payload);
      });
    case TODO_ACTION_TYPES.GET_TODO_LIST_SUCCESS:
      return produce(state, (draft) => {
        draft.todos = action.payload;
      });
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      return produce(state, (draft) => {
        const index = draft.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index > -1) {
          const todo = draft.todos[index];
          todo.completed = action.payload.completed;
        }
      });
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      return produce(state, (draft) => {
        const index = draft.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        draft.todos.splice(index, 1);
      });
    default:
      return state;
  }
};
