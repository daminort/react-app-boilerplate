import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { bg, height } = THEME;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${height.header}px;
  background-color: ${bg.header};
  padding: 0 24px;
`;
