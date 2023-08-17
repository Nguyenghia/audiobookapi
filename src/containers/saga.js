import { all } from 'redux-saga/effects';

import Auth from './Auth/saga'

export default function* AppSaga() {
  yield all([
    Auth(),
  ]);
}
