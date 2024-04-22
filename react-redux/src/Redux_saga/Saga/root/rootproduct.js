import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../Product/action/action";
import { handaleGetProduct } from "../managproduct/manageproduct";
export function* getProductSaga (){

    yield takeLatest(GET_PRODUCT_PROGRESS, handaleGetProduct);
}