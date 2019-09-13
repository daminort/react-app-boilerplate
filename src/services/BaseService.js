import { agent } from './agent';

import { NotificationUtils } from '../utils/NotificationUtils';

class BaseService {

	constructor(url) {
		this.url = url;
		this.agent = agent;
	}

	find = async (params = {}) => {
		try {
			const result = await agent.get(this.url, { params });
			return result.data;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}

	findByID = async (id, params = {}) => {
		try {
			const result = await agent.get(`${this.url}/${id}`, { params });
			return result.data;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}

	create = async (data, params = {}) => {
		try {
			const result = await agent.post(this.url, data, { params });
			return result.data;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}

	update = async (id, data, params = {}) => {
		try {
			const result = await agent.put(`${this.url}/${id}`, data, { params });
			return result.data;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}

	remove = async (id) => {
		try {
			const result = await agent.delete(`${this.url}/${id}`);
			return result.data;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}
}

export default BaseService;
export { BaseService };
