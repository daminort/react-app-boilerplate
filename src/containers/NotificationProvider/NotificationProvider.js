import { useDispatch } from 'react-redux';

import { authActions } from '../../redux/auth/actions';
import { useEventListener } from '../../lib/event-bus';

const NotificationProvider = () => {

	const dispatch = useDispatch();

	const onShowNotification = ({ id, type, text }) => {
		console.log('Notification: ', {
			id,
			type,
			text,
		});
	};

	const onThrowUnauthorized = () => {
		dispatch(authActions.logout());
	};

	useEventListener('showNotification', onShowNotification);
	useEventListener('throwUnauthorized', onThrowUnauthorized);
	//useEventListener('showConfirm', onShowConfirm);

	return null;
};

export default NotificationProvider;
export { NotificationProvider };
