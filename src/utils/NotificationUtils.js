import uuid from 'uuid/v4';
import { NOTIFICATION_TYPES } from '../constants/notifications';

class NotificationUtils {

	static emitEvent(type, text) {
		const event = new CustomEvent('showNotification', {
			detail: {
				id: uuid(),
				type,
				text,
			},
		});

		window.dispatchEvent(event);
	}

	static success(text) {
		NotificationUtils.emitEvent(NOTIFICATION_TYPES.success, text);
	}

	static error(text) {
		NotificationUtils.emitEvent(NOTIFICATION_TYPES.error, text);
	}

	static info(text) {
		NotificationUtils.emitEvent(NOTIFICATION_TYPES.info, text);
	}

	static warning(text) {
		NotificationUtils.emitEvent(NOTIFICATION_TYPES.warning, text);
	}

	static confirm(options = {}) {
		const event = new CustomEvent('showConfirm', {
			detail: {
				...options,
			},
		});

		window.dispatchEvent(event);
	}

	static throwUnauthorized() {
		const event = new CustomEvent('throwUnauthorized');
		window.dispatchEvent(event);
	}
}

export default NotificationUtils;
export { NotificationUtils };
