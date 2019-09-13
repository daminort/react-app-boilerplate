import React from 'react';

import { Input as LibInput } from '../../../lib/ui';
import { Field } from '../Field';

import { propTypes, defaultProps } from '../prop-types';

const Input = (props) => {
	const {
		noMargin,
		field,
		form,
		...restProps
	} = props;

	const { name } = field;
	const { errors, touched } = form;

	const isError = Boolean(touched[name] && errors[name]);

	return (
		<Field
			noMargin={noMargin}
			error={errors[name]}
		>
			<LibInput
				error={isError}
				{...field}
				{...restProps}
			/>
		</Field>
	);
};

Input.propTypes = {
	...propTypes,
};

Input.defaultProps = {
	...defaultProps,
};

export default Input;
export { Input };
