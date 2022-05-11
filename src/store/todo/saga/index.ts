import { all } from "redux-saga/effects";
import { todoSaga } from "store/todo/saga/todo.saga";

export function* rootSaga() {
  yield all([todoSaga()]);
}
