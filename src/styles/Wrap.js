import styled from "styled-components";

export const FormWrap = styled.div`
  background: ${props => props.theme.colorBg};
  color: ${props => props.theme.colorText};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
