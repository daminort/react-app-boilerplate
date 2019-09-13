class ReduxUtils {

	/**
	 * Makes action creator
	 * @param {String} type a type of action
	 * @param  {...String} argNames names of values which will be used as payload
	 * @returns {Function}
	 *
	 * Example:
	 * const addTodo = makeActionCreator('ADD_TODO', 'text');
	 * const action = addTodo('Learn Redux');
	 * console.log(action);
	 *
	 * Output:
	 * {
	 *    type: 'ADD_TODO',
	 *    payload: {
	 *      text: 'Learn Redux',
	 *    }
	 * }
	 */
	static makeActionCreator(type, ...argNames) {

		return function (...args) {

			const action = { type };

			if (argNames.length > 0) {
				const payload = {};
				argNames.forEach((arg, index) => {
					const name = argNames[index];
					payload[name] = args[index];
				});

				action.payload = payload;
			}

			return action;
		};
	}
};

export default ReduxUtils;
export { ReduxUtils };
