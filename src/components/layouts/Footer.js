import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { bg, height, text } = THEME;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  height: ${height.footer}px;
  background-color: ${bg.header};
  color: ${text.invert};
  padding: 0 24px;
`;
