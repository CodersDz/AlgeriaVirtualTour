import styled, { keyframes, css } from "styled-components";

const displaySocialMedia = keyframes`
  0% {position:absolute;
  }
  100%{position:static;transform: translateX(0); }
`;

export const SidePopUpBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 40%;
  z-index: 3;
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
  padding: 10px;

  &:hover ${VisibleContainer1} {
    transform: translateX(-300%);
  }
  &:hover ${HiddenContainer1} {
  }
`;

export const VisibleContainer2 = styled.div`
  transition: transform 0.3s ease-in-out;
`;
export const HiddenContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  left: 0;
  & > * {
    position: absolute;
    transform: translateX(-300%);
  }
`;
export const BlueGlobeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 30px 30px 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0 5px;
  position: relative;
  transition: transform 0.5s ease-in-out;

  &:hover ${VisibleContainer2} {
    transform: translateX(-300%);
  }
  &:hover {
    ${HiddenContainer2}>* {
      animation: ${displaySocialMedia} 0.5s forwards;
    }
  }
`;
