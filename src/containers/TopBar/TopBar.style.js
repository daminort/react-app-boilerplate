import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  
 	.left {
 		display: flex;
  	justify-content: flex-start;
  	align-items: center;
  	
  	a {
  		color: ${text.invert};
  		text-decoration: none;
  		margin-right: 32px;
  		font-weight: bold;
  	}
 	}
 	
 	.right {
 		display: flex;
  	justify-content: flex-end;
  	align-items: center;
  	
  	.link {
  		color: ${text.invert};
  		margin-left: 32px;
  		font-weight: bold;
  		cursor: pointer;
  	}
 	}
`;
