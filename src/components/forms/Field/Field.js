import React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';

import { Wrapper } from './Field.style';

const Field = (props) => {
	const {
		children,
		noMargin,
		error,
	} = props;

	const isError = Boolean(error);

	const wrapperClass = cn('form-field', {
		'no-margin': noMargin,
		'error': isError,
	});
	const errorClass = cn('form-error', {
		'visible': isError,
	});

	return (
		<Wrapper className={wrapperClass}>
			{children}
			<div className={errorClass}>
				{error}
			</div>
		</Wrapper>
	);
};

Field.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	noMargin: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Field.defaultProps = {
	noMargin: false,
	error: false,
};

export default Field;
export { Field };
