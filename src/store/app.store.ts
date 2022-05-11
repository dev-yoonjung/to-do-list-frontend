import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "store/todo/reducers";
import { rootSaga } from "store/todo/saga";

const sagaMiddleWare = createSagaMiddleware();
export const store: Store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(rootSaga);
