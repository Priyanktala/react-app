import { all } from "redux-saga/effects";
import { getProductSaga } from "./root/rootproduct";

export function* rootSaga() {
    yield all([getProductSaga()]);
}
