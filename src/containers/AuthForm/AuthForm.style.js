import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
	display: block;
	min-width: 300px;
	align-self: flex-start;
	margin-top: calc(100vh / 4 - (100vh / 8));

	form {
		h3 {
			color: ${text.main};
			margin-bottom: 24px;
		}
		
		.footer {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			a {
				font-size: 0.9em;
			}
		}
	}
`;
