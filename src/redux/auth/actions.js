import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Auth]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LOGIN: `${prefix} login`,
	LOGOUT: `${prefix} logout`,

	PROFILE_RELOAD: `${prefix} profile-reload`,
	PROFILE_REFRESH: `${prefix} profile-refresh`,
};

const actions = {
	...TYPES,
	login: makeActionCreator(TYPES.LOGIN, 'credentials'),
	logout: makeActionCreator(TYPES.LOGOUT),

	profileReload: makeActionCreator(TYPES.PROFILE_RELOAD),
	profileRefresh: makeActionCreator(TYPES.PROFILE_REFRESH, 'user'),
};

export default actions;
export { actions as authActions };
