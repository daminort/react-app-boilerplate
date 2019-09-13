import styled from 'styled-components';

import { THEME } from '../../../constants/theme';

const { bg, border, text } = THEME;

export const LibInput = styled.input`
	width: 100%;
  padding: 8px 12px;
  background-color: ${bg.input};
  color: ${text.main};
  border: 1px solid ${border.input};
  border-radius: 4px;
  box-sizing: border-box;
`;
