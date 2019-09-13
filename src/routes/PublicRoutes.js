import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { UI_ROUTES } from '../constants/routes';

const Login = lazy(() => import('../pages/Login'));

const PublicRoutes = () => {
	return (
		<Suspense fallback={<div />}>
			<Switch>
				<Route exact path={UI_ROUTES.login} render={props => <Login {...props} />} />
				<Route exact path={UI_ROUTES.register} render={props => <Login {...props} />} />
				<Route render={props => <Login {...props} />} />
			</Switch>
		</Suspense>
	);
};

export default PublicRoutes;
export { PublicRoutes };
