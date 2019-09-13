import React from 'react';
import * as PropTypes from 'prop-types';

import { LibInput } from './Input.style';

const Input = ({ type, name, ...restProps }) => {
	return (
		<LibInput
			type={type}
			name={name}
			{...restProps}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
	name: '',
};

export default Input;
export { Input };
