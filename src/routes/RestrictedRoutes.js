import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { UI_ROUTES } from '../constants/routes';

const Start = lazy(() => import('../pages/Start'));
const Page404 = lazy(() => import('../pages/Page404'));

const RestrictedRoutes = () => {
	return (
		<Suspense fallback={<div />}>
			<Switch>
				<Route exact path={UI_ROUTES.root} render={props => <Start {...props} />} />
				<Route path="*" render={props => <Page404 {...props} />} />
			</Switch>
		</Suspense>
	);
};

export default RestrictedRoutes;
export { RestrictedRoutes };
