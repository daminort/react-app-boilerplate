import React from 'react';
import * as PropTypes from 'prop-types';

import { LibButton } from './Button.style';

const Button = ({ type, children, ...restProps }) => {
	return (
		<LibButton
			type={type}
			{...restProps}
		>
			{children}
		</LibButton>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

Button.defaultProps = {
	type: 'text',
	children: null,
};

export default Button;
export { Button };
