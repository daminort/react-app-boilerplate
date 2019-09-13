import axios from 'axios';
import { NotificationUtils } from '../utils/NotificationUtils';

import { API_URL } from '../config';
import { API_ROUTES } from '../constants/routes';
import { StorageUtils } from '../utils/StorageUtils';

const agent = axios.create({
	baseURL: API_URL,
});

agent.interceptors.request.use(config => {
	const token = StorageUtils.restoreToken();
	config = {
		...config,
		headers: {
			...config.headers,
			Authorization: `Bearer ${token}`,
		},
	};

	return config;
});

agent.interceptors.response.use(
	res => res || { success: true, data: {} },
	err => {
		const { config, status, response } = err;
		const statusCode = status || (response && response.status);
		const isLogin = (config && config.url && config.url.includes(API_ROUTES.login));

		if (statusCode && statusCode === 401) {
			StorageUtils.clearAll();
			if (!isLogin) {
				NotificationUtils.throwUnauthorized();
				return;
			}
		}

		let { message } = err;
		if (response && response.data && response.data.error) {
			message = response.data.error;
		}
		err.errorText = message;

		throw err;
	},
);

export { agent };
