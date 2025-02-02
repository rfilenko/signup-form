import styled from "styled-components";

export const FormWrap = styled.div`
  background: ${props => props.theme.colorBg};
  color: ${props => props.theme.colorText};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  nav {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 10rem;

    a {
      color: whitesmoke;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }
    .active {
      background: ${props => props.theme.secondary};
    }
    .signup {
      background: ${props => props.theme.green};
    }
  }
`;
