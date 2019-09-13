import React from 'react';

import { AbsoluteLayout } from '../../components/layouts';
import { AuthForm } from '../../containers/AuthForm';
import { FORM_TYPES } from '../../constants/authForm';

const Login = () => {
	return (
		<AbsoluteLayout>
			<AuthForm type={FORM_TYPES.login} />
		</AbsoluteLayout>
	);
};

export default Login;
export { Login };
