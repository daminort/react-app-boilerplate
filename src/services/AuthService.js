import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class AuthService extends BaseService {

	constructor(url) {
		super(url);
		this.login = this.login.bind(this);
		this.profile = this.profile.bind(this);
	}

	async login(credentials) {
		try {
			const response = await this.agent.post('', {
				...credentials,
			});

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}

	async profile() {
		try {
			const response = await this.agent.get(API_ROUTES.authProfile);

			const result = this.processResponse(response);
			return Promise.resolve(result);

		} catch (error) {
			this.processError(error);
			return null;
		}
	}
}

const ServiceInstance = new AuthService(API_ROUTES.auth);

export default ServiceInstance;
export { ServiceInstance as AuthService };
