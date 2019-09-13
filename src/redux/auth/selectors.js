import { createSelector } from 'reselect';

const user = ({ Auth }) => Auth.user;

export const selectUser = createSelector(
	[user],
	(user) => user,
);

export const selectIsLoggedIn = createSelector(
	[selectUser],
	(user) => Boolean(user && user.id),
);
