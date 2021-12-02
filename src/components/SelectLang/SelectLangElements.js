import styled, { keyframes } from "styled-components";

const showLi = keyframes`
  0% {
    transform:translateY(-100%);
    opacity:0;
}
  100% {
    transform:translateY(0);
    opacity:1;
    }
`;
export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const DropDownHeader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DropDownList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: absolute;
  top: 100%;
  border-radius: 20px;
  overflow: hidden;
  transform: translateX(-25%);
  width: 200px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 10px;
  width: 100%;
  display: none;
  animation: ${showLi} 0.3s forwards ease-out;
  ${DropDownContainer}:hover & {
    display: flex;
  }
`;
export const LangSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const DropDownImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
