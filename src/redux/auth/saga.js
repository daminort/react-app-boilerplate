import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { UI_ROUTES } from '../../constants/routes';
import { AuthService } from '../../services/AuthService';
import { StorageUtils } from '../../utils/StorageUtils';

import actions from './actions';

import { mockToken, mockUser } from '../../utils/mocks/auth';

function* login({ payload }) {
	const { credentials } = payload;
	let token = yield call(AuthService.login, credentials);

	// TODO: Remove mock data
	if (!token) { token = mockToken; }

	if (!token) {
		return;
	}

	yield call(StorageUtils.storeToken, token);
	let user = yield call(AuthService.profile);

	// TODO: Remove mock data
	if (!user) { user = mockUser; }

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
