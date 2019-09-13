import Immutable from 'seamless-immutable';
import { cloneDeep } from '../lib/lodash';

class CommonUtils {

	static safeMerge(target, source, addNewKeys = false) {
		const sourceKeys = Object.keys(source);
		const targetKeys = !addNewKeys ? Object.keys(target) : sourceKeys;
		const isImmutable = Immutable.isImmutable(target);

		let result = isImmutable ? target : cloneDeep(target);

		targetKeys.forEach(key => {
			const isValueExist = sourceKeys.includes(key);
			if (!isValueExist) {
				return;
			}

			const value = source[key];

			if (isImmutable) {
				result = Immutable.set(result, key, value);
			} else {
				result[key] = value;
			}
		});

		return result;
	}
}

export default CommonUtils;
export { CommonUtils };
