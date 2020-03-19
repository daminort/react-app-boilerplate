import axios from 'axios';

import { API_URL } from '../config';
import { CUSTOM_EVENTS } from '../constants/customEvents';
import { STATUS_CODES } from '../constants/statusCodes';

import { NotificationUtils } from '../utils/NotificationUtils';
import { StorageUtils } from '../utils/StorageUtils';
import { eventEmitter } from '../lib/event-bus';
import { capitalize } from '../lib/lodash';

class BaseService {

	baseServiceURL = API_URL;

	constructor(url = '') {
		if (url) {
			this.baseServiceURL = `${API_URL}${url}`;
		}

		this.processError = this.processError.bind(this);

		this.list = this.list.bind(this);
		this.entity = this.entity.bind(this);
		this.create = this.create.bind(this);
		this.update = this.update.bind(this);
		this.delete = this.delete.bind(this);
	}

	get baseURL() {
		return this.baseServiceURL;
	}

	get agent() {
		const headers = {};
		const accessToken = StorageUtils.restoreToken();
		if (accessToken) {
			headers.Authorization = `Bearer ${accessToken}`;
		}

		return axios.create({
			baseURL: this.baseURL,
			headers,
		});
	}

	processError(error) {
		const accessToken = StorageUtils.restoreToken();

		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		let showNotification = true;
		const status = error?.response?.status || null;
		if (status === STATUS_CODES.unauthorized && accessToken) {
			eventEmitter.emit(CUSTOM_EVENTS.unauthorized);
			showNotification = false;
		}

		const serverMessage = error?.response?.data?.error || error.message;
		if (serverMessage && showNotification) {
			const resMessage = (typeof serverMessage === 'string') ? serverMessage : JSON.stringify(serverMessage);
			NotificationUtils.error('Error', capitalize(resMessage));
		}

		console.dir(error);
	}

	processResponse(response) {
		const { data: axiosData } = response; // 'data' from Axios
		const { data } = axiosData; // 'data' from our backend: { status: 200, data: {...} }

		return data || axiosData;
	}

	async list(params = {}) {
		try {
			const response = await this.agent.get('', {
				params,
			});

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}

	async entity(id, params = {}) {
		const url = `/${id}`;
		try {
			const response = await this.agent.get(url, {
				params,
			});

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}

	async create(data = {}) {
		try {
			const response = await this.agent.post('', {
				...data,
			});

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}

	async update(id, data = {}) {
		const url = `/${id}`;
		try {
			const response = await this.agent.put(url, {
				...data,
			});

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}

	async delete(id, params = {}) {
		const url = `/${id}`;
		try {
			const response = await this.agent.delete(url, {
				params,
			});

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}
}

export default BaseService;
export { BaseService };
