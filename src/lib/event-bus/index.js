import React, { createContext, useContext, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import mitt from 'mitt';

const eventEmitter = mitt();
const BusContext = createContext(null);

function useEventEmitter() {
	return useContext(BusContext);
}

function useEventListener(name, fn) {
	const emitter = useEventEmitter();
	useEffect(() => {
		emitter.on(name, fn);
		return () => {
			emitter.off(name, fn);
		};
	}, [emitter, name, fn]);
}

function EventProvider({ children }) {
	return (
		<BusContext.Provider value={eventEmitter}>
			{children}
		</BusContext.Provider>
	);
}

EventProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

EventProvider.defaultProps = {
	children: null,
};

export default EventProvider;
export {
	EventProvider,
	useEventEmitter,
	useEventListener,
	eventEmitter,
};
