import React from 'react';

import { Header, MainContent, Footer } from '../../components/layouts';
import { RestrictedRoutes } from '../../routes';

import { TopBar } from '../TopBar/TopBar';

const Root = () => {
	return (
		<>
			<Header>
				<TopBar />
			</Header>
			<MainContent>
				<RestrictedRoutes />
			</MainContent>
			<Footer />
		</>
	);
};

export default Root;
export { Root };
