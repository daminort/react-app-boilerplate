import { API_ROUTES } from '../constants/routes';
import { NotificationUtils } from '../utils/NotificationUtils';
import { BaseService } from './BaseService';

class AuthService extends BaseService {
	constructor() {
		super(API_ROUTES.root);
	}

	profile = async () => {
		const { agent } = this;
		try {
			const { data } = await agent.get(API_ROUTES.authProfile);
			return data;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}

	login = async (credentials) => {
		const { agent } = this;
		try {
			const { data } = await agent.post(API_ROUTES.login, credentials);
			return data.accessToken;

		} catch (err) {
			NotificationUtils.error(err.errorText || err.message);
			return null;
		}
	}
}

const Service = new AuthService();

export default Service;
export { Service as AuthService };
