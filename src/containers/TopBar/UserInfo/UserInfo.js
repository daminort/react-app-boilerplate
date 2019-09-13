import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/auth/selectors';
import { Wrapper } from './UserInfo.style';

const UserInfo = () => {

	const user = useSelector(selectUser);

	return (
		<Wrapper>
			<img src={user.avatar} alt={user.name} />
			<span>{user.name}</span>
		</Wrapper>
	);
};

export default UserInfo;
export { UserInfo };
