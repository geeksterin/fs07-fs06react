import {takeEvery, put} from 'redux-saga/effects'


function* getDataFromSaga() {
    const api = yield fetch("https://api.github.com/users")
    const data = yield api.json()
    console.log("apidata", data);
    yield put({type:"Set_Product_Action", data})
}

function* productsaga() {
    // console.log("hello saga called");
    yield takeEvery("Product_Action_Type", getDataFromSaga)
}

export default productsaga