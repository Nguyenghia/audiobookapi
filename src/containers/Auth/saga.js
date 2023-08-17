// import { getExampleApi } from "@/api/example";
import { takeLatest, put, call } from "redux-saga/effects";
import { AUTH } from "./constants";
import { loginSuccess } from "./actions";

function* handlerLogin(props) {
  try {
    const data = {};
    console.log(props)
    yield put(loginSuccess());
  } catch (err) {
    console.log("err handlerLogin", err);
  }
}

function* root() {
  yield takeLatest(AUTH.AUTH_LOGIN, handlerLogin);
}

export default root;
