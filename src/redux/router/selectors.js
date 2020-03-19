import { createSelector } from 'reselect';

import { UI_ROUTES } from '../../constants/routes';

const location = ({ router }) => router.location;

export const selectLocation = createSelector(
	[location],
	(location) => location,
);

export const selectIsLoginPage = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.login);
	},
);

export const selectIsPublicRoute = createSelector(
	[selectIsLoginPage],
	(isLogin) => {
		return isLogin;
	},
);
