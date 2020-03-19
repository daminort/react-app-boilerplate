import React from 'react';
import * as PropTypes from 'prop-types';

import { AbsoluteLayout } from '../../components/layouts';

const Page404 = ({ name }) => {
	return (
		<AbsoluteLayout>
			<div>
				<h2>Page not found :(</h2>
				<h4>Please, ensure you have enter right address</h4>
			</div>
		</AbsoluteLayout>
	);
};

Page404.propTypes = {
	name: PropTypes.string,
};

Page404.defaultProps = {
	name: '',
};

export default Page404;
export { Page404 };

