import React from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../../redux/auth/actions';

import { Link } from '../../lib/ui';
import { UserInfo } from './UserInfo/UserInfo';
import { Wrapper } from './TopBar.style';

const TopBar = () => {

	const dispatch = useDispatch();

	const onClickLogout = () => {
		dispatch(authActions.logout());
	};

	return (
		<Wrapper>
			<div className="left">
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
			</div>
			<div className="right">
				<UserInfo />
				<div className="link" onClick={onClickLogout}>Logout</div>
			</div>
		</Wrapper>
	);
};

export default TopBar;
export { TopBar };
