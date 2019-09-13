import styled from 'styled-components';

const AbsoluteLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default AbsoluteLayout;
export { AbsoluteLayout };
