import styled, { keyframes, css } from "styled-components";

import LogInBg1 from "../../assets/Images/LogInBg.jpg";
import LogInBg2 from "../../assets/Images/LogIn2.jpg";
import device from "../../assets/Variables/responsive";

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
  padding: 20px;
  background: linear-gradient(rgba(3, 40, 0, 0.95), rgba(3, 40, 0, 0.95)),
    url(${LogInBg1});
`;
export const LogInSignUpContainer = styled.div`
  width: 500px;
  max-width: 100%;
  height: ${({ login }) => (login ? "85%" : "100%")};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: height 0.5s ease;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
  }
  @media only screen and ${device.laptop} {
    height: ${({ login }) => (login ? "60%" : "80%")};
  }
  @media only screen and ${device.desktop} {
  }
`;
