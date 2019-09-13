import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { UI_ROUTES } from '../../constants/routes';
//import { AuthService } from '../../services/AuthService';
import { StorageUtils } from '../../utils/StorageUtils';

import actions from './actions';

import { mockToken, mockUser } from '../../utils/mocks/auth';

function* login({ payload }) {
	//const { credentials } = payload;
	//const token = yield call(AuthService.login, credentials);
	const token = mockToken;
	if (!token) {
		return;
	}

	yield call(StorageUtils.storeToken, token);
	//const user = yield call(AuthService.profile);
	const user = mockUser;

	yield put(actions.profileRefresh(user));
	yield put(push(UI_ROUTES.root));
}

function* logout() {
	yield call(StorageUtils.clearAll);
	yield put(actions.profileRefresh(null));
	yield put(push(UI_ROUTES.login));
}

export default function* authSaga() {
	yield all([
		takeLatest(actions.LOGIN, login),
		takeLatest(actions.LOGOUT, logout),
	]);
}
