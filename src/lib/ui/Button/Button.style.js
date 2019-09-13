import styled from 'styled-components';

import { THEME } from '../../../constants/theme';

const { bg, border, text } = THEME;

export const LibButton = styled.button`
  padding: 8px 16px;
  background-color: ${bg.button};
  color: ${text.invert};
  border: 1px solid ${border.button};
  border-radius: 4px;
`;
