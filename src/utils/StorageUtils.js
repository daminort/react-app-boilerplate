import { STORAGE_KEYS } from '../constants/storage';

class StorageUtils {

	// Common
	static storeValue(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	static restoreValue(key, defaultValue = null) {
		const value = localStorage.getItem(key);
		try {
			const parsedValue = JSON.parse(value);
			return parsedValue || defaultValue;
		} catch (e) {
			return defaultValue;
		}
	}

	static clearValue(key) {
		localStorage.removeItem(key);
	}

	static clearAll() {
		localStorage.clear();
	}

	// Auth
	static storeToken(token) {
		StorageUtils.storeValue(STORAGE_KEYS.token, token);
	}

	static restoreToken() {
		return StorageUtils.restoreValue(STORAGE_KEYS.token, '');
	}

	static clearToken() {
		return StorageUtils.clearValue(STORAGE_KEYS.token);
	}
}

export default StorageUtils;
export { StorageUtils };
