import styled, { keyframes, css } from "styled-components";

import LogInBg1 from "../../assets/Images/LogInBg.jpg";
import LogInBg2 from "../../assets/Images/LogIn2.jpg";

const enterLogin = keyframes`
  from {background: linear-gradient(rgba(3, 40, 0, 0.95), rgba(3, 40, 0, 0.95)),url(${LogInBg1});}
  to {background: linear-gradient(rgba(3, 40, 0, 0.55), rgba(3, 40, 0, 0.95)),url(${LogInBg2});}
`;

const enterSignUp = keyframes`
  from {background: linear-gradient(rgba(3, 40, 0, 0.95), rgba(3, 40, 0, 0.95)),url(${LogInBg2});}
  to {background: linear-gradient(rgba(3, 40, 0, 0.9), rgba(3, 40, 0, 0.95)),url(${LogInBg1});}
`;

export const PageContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  color: #fff;
  animation: ${({ login }) =>
    login
      ? css`
          ${enterLogin} 2s linear forwards
        `
      : css`
          ${enterSignUp} 2s linear forwards
        `};
`;
export const LogInSignUpContainer = styled.div`
  width: 25%;
  height: ${({ login }) => (login ? "60%" : "80%")};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: height 0.5s ease;
`;
