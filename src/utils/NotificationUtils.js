import { v4 as uuid } from 'uuid';

import { eventEmitter } from '../lib/event-bus';
import { NOTIFICATION_TYPES } from '../constants/notifications';

class NotificationUtils {

	static emitEvent(type, text) {
		eventEmitter.emit('showNotification', {
			id: uuid(),
			type,
			text,
		});
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
		eventEmitter.emit('showConfirm', options);
	}

	static throwUnauthorized() {
		eventEmitter.emit('throwUnauthorized');
	}
}

export default NotificationUtils;
export { NotificationUtils };
