import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import { authActions } from '../../../redux/auth/actions';
import { UI_ROUTES } from '../../../constants/routes';
import { loginSchema } from '../../../utils/validators/auth';

import { Input } from '../../../components/forms';
import { Button, Link } from '../../../lib/ui';

const initValues = {
	email: '',
	password: '',
};

const Login = () => {

	const dispatch = useDispatch();

	const onSubmit = (values, actions) => {
		dispatch(authActions.login(values));
		actions.setSubmitting(false);
	};

	return (
		<Formik
			enableReinitialize
			initialValues={initValues}
			validationSchema={loginSchema}
			onSubmit={onSubmit}
			render={() => {
				return (
					<Form id="login-form">
						<h3>
							Login
						</h3>
						<div className="field">
							<Field
								name="email"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="email"
										placeholder="Enter your E-mail"
										{...fieldProps}
									/>
								)}
							/>
						</div>

						<div className="field">
							<Field
								name="password"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="password"
										type="password"
										placeholder="Enter your Password"
										{...fieldProps}
									/>
								)}
							/>
						</div>
						<div className="footer">
							<Link to={UI_ROUTES.register}>Register</Link>
							<Button type="submit">Log In</Button>
						</div>
					</Form>
				);
			}}
		/>
	);
};

export default Login;
export { Login };
