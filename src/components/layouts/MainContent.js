import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { colors, height } = THEME;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.white};
  padding: 0 48px;
  min-height: calc(100vh - ${height.header}px - ${height.footer}px);
`;
