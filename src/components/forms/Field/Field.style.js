import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

const { bg, text, border } = THEME;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  
  &.no-margin {
  	margin-bottom: 0px;
  }
  
  &.error {
  	input {
  		border-color: ${border.inputError};
  	}
  }
  
  .form-error {
  	position: relative;
  	background-color: ${bg.inputError};
  	height: 0px;
  	opacity: 0;
  	padding: 0;
  	transition: all 0.15s linear;
  	font-size: 13px;
  	margin-top: 8px;
  	color: ${text.invert};
  	border-radius: 4px;
  	
  	&.visible {
  		height: auto;
  		opacity: 1;
  		padding: 4px 8px;
  		
  		&::after {
  			position: absolute;
  			content: '';
  			width: 8px;
  			height: 8px;
  			position: absolute;
  			top: -4px;
  			right: 8px;
  			transform: rotate(45deg);
  			background-color: ${bg.inputError};
  		}
  	}
  }
`;
