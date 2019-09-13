import React from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Link = ({ children, ...restProps }) => {
	return (
		<NavLink {...restProps}>
			{children}
		</NavLink>
	);
};

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

Link.defaultProps = {
	children: null,
};

export default Link;
export { Link };
