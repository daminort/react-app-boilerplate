import React from 'react';
import * as PropTypes from 'prop-types';

import { FORM_TYPES } from '../../constants/authForm';

import { Login } from './forms/Login';
import { Wrapper } from './AuthForm.style';

const forms = {
	[FORM_TYPES.login]: <Login />,
	[FORM_TYPES.register]: <Login />,
};

const AuthForm = ({ type }) => {

	return (
		<Wrapper>
			{forms[type]}
		</Wrapper>
	);
};

AuthForm.propTypes = {
	type: PropTypes.oneOf([
		FORM_TYPES.login,
		FORM_TYPES.register,
	]),
};

AuthForm.defaultProps = {
	type: FORM_TYPES.login,
};

export default AuthForm;
export { AuthForm };
