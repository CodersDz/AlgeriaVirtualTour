import styled, { keyframes, css } from "styled-components";
import device from "../../assets/Variables/responsive";
const displaySocialMedia = keyframes`
  0% {position:absolute;
  }
  100%{position:static;transform: translateX(0); }
`;

export const SidePopUpBarContainer = styled.div`
  display: none;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 40%;
  z-index: 3;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    display: flex;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const VisibleContainer1 = styled.div`
  transition: transform 0.5s ease-in-out;
  align-self: start;
`;
export const HiddenContainer1 = styled.div``;
export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-radius: 0px 30px 30px 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px 20px;

  &:hover ${VisibleContainer1} {
    transform: translateX(-300%);
  }
  &:hover ${HiddenContainer1} {
  }
`;

export const VisibleContainer2 = styled.div`
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  border-radius: 0px 30px 30px 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0 5px;
`;
export const HiddenContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  border-radius: 0px 30px 30px 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0 5px;
  & > * {
    position: absolute;
    transform: translateX(-300%);
  }
`;
export const BlueGlobeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${VisibleContainer2}>* {
    transform: translateX(-300%);
    transition: transform 0.5s ease-in-out;
  }
  &:hover {
    ${HiddenContainer2}>* {
      animation: ${displaySocialMedia} 0.5s forwards;
    }
    ${HiddenContainer2} {
      transform: translate(-100%, -35%);
    }
  }
`;
export const AIcone = styled.a``;
