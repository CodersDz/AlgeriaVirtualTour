import styled, { keyframes } from "styled-components";
import device from "../../../../assets/Variables/responsive";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../../../../assets/svg/arrow.svg";
const MenuAnimation = keyframes`
from {
  height:0px;
}

to {
  height:150px;
}
`;
export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 80%;
  display: none;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    display: flex;
  }
  @media only screen and ${device.desktop} {
  }
`;

export const SearchBtn = styled.button`
  height: 100%;
  color: #fff;
  background-color: #3ec422;
  width: 20%;
  border: none;
  border-radius: 30px;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
export const MapIconeContainer = styled(Link)`
  height: 60px;
  width: 60px;
  background-color: #3ec422;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
export const SelectWilayaContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;

  color: #fff;

  border: none;
  cursor: pointer;
  position: relative;
  overflow-y: visible;
`;
export const SelectWilayaVisible = styled.div`
  padding: 10px 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(props) =>
    props.showWilayas === false ? "30px" : "30px 30px 0 0"};
  background: rgba(255, 255, 255, 0.5);
`;
export const WilayaSelectedH3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;
export const Arrow = styled(ArrowSvg)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  ${SelectWilayaContainer}:hover & {
    transform: rotate(-540deg);
  }
`;
export const SelectWilayaUlHidden = styled.ul`
  display: ${(props) => (props.showWilayas === false ? "none" : "flex")};
  background: rgba(255, 255, 255, 0);
  width: 100%;
  max-height: 300px;
  animation: ${MenuAnimation} 0.3s forwards;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 10px 10px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 60px;
  z-index: 2;
  text-align: justify;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }
`;
export const SelectWilayaLIHidden = styled.li`
  min-height: 33%;
  cursor: pointer;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 400;
  padding: 0 30px;
  border-radius: 30px;
`;
