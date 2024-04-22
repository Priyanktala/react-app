import rootReducer from "./rootreducer";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./Saga/index";
import { applyMiddleware,legacy_createStore as createStore } from "redux";



const sagaMiddalware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddalware))
);

sagaMiddalware.run(rootSaga);

export default store;