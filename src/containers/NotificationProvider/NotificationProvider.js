import { useCallback } from 'react';
import { useEvent } from 'react-use';
import { useDispatch } from 'react-redux';

import { authActions } from '../../redux/auth/actions';

const NotificationProvider = () => {

	const dispatch = useDispatch();

	const onShowNotification = useCallback((event) => {
		const { detail } = event;
		const { id, type, text } = detail;

		console.log('Notification: ', {
			id,
			type,
			text,
		});
	}, []);

	const onThrowUnauthorized = useCallback(() => {
		dispatch(authActions.logout());
	}, [dispatch]);

	useEvent('showNotification', onShowNotification, window);
	useEvent('throwUnauthorized', onThrowUnauthorized, window);
	//useEvent('showConfirm', onShowConfirm, window);

	return null;
};

export default NotificationProvider;
export { NotificationProvider };
