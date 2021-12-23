import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const MobileBottomNavContainer = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 4;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    display: none;
  }
  @media only screen and ${device.desktop} {
    display: none;
  }
`;
