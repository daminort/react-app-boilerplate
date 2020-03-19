import React from 'react';
import { useMount } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';

import { appActions } from '../../redux/app/actions';
import { selectUI } from '../../redux/app/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { EventProvider } from '../../lib/event-bus';

import { PublicRoutes } from '../../routes';
import { AppLoader } from '../../components/loaders';
import { Root } from '../Root';

const App = () => {

	const { loading } = useSelector(selectUI);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	const dispatch = useDispatch();

	useMount(() => {
		dispatch(appActions.appStart());
	});

	return (
		<EventProvider>
			{isLoggedIn && <Root />}
			{!isLoggedIn && <PublicRoutes />}

			<AppLoader visible={loading} />
		</EventProvider>
	);
};

export default App;
export { App };
