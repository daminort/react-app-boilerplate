import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { AuthService } from '../../services/AuthService';
import { UI_ROUTES } from '../../constants/routes';

import authActions from '../auth/actions';
import actions from './actions';

import { StorageUtils } from '../../utils/StorageUtils';

function* appStart() {
	yield put(actions.uiMerge({ loading: true }));

	const token = yield call(StorageUtils.restoreToken);
	if (!token) {
		yield put(actions.uiMerge({ loading: false }));
		yield put(push(UI_ROUTES.login));
		return;
	}

	const user = yield call(AuthService.profile);
	if (!user) {
		yield call(StorageUtils.clearAll);
		yield put(actions.uiMerge({ loading: false }));
		yield put(push(UI_ROUTES.login));
		return;
	}

	yield put(authActions.profileRefresh(user));
	yield put(actions.uiMerge({ loading: false }));
}

export default function* appSaga() {
	yield all([
		takeLatest(actions.APP_START, appStart),
	]);
}
