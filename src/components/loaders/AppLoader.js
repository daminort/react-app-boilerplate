import React from 'react';
import * as PropTypes from 'prop-types';

import { AbsoluteLayout } from '../layouts';

const AppLoader = ({ visible }) => {
	if (!visible) {
		return null;
	};

	return (
		<AbsoluteLayout>
			Loading...
		</AbsoluteLayout>
	);
};

AppLoader.propTypes = {
	visible: PropTypes.bool.isRequired,
};

export default AppLoader;
export { AppLoader };
