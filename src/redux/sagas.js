/**
 * Adhere alphabetical order for import sections and 'rootSaga' function.
 */

import { all, fork } from 'redux-saga/effects';

import appSaga from './app/saga';
import authSaga from './auth/saga';
import eventBusSaga from './eventBus/saga';

export default function* rootSaga() {
	yield all([
		fork(appSaga),
		fork(authSaga),
		fork(eventBusSaga),
	]);
}
