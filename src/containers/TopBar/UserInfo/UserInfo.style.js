import styled from 'styled-components';

import { THEME } from '../../../constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  
  img {
  	width: 40px;
  	height: 40px;
  	border-radius: 50%;
  }
  
  span {
  	color: ${text.invert};
		margin-left: 12px;
  }
`;
