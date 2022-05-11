import * as TODO_ACTION_TYPES from "store/todo/constants";
import { ITodo } from "store/todo/models/todo.model";
import { TodoActionTypes } from "store/todo/actions/todo.actions.types";

interface ITodoReducerInterface {
  todos: ITodo[];
}

export const initialState: ITodoReducerInterface = {
  todos: [],
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      return;
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      return;
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      return;
    default:
      return state;
  }
};
