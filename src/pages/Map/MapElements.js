import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import device from "../../assets/Variables/responsive";
import { ReactComponent as ArrowSvg } from "../../assets/svg/arrow.svg";

const MenuAnimation = keyframes`
from {
  height:0px;
}

to {
  height:150px;
}
`;

export const PageContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MapMenu = styled.div`
  height: 70px;
  width: 60%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
  bottom: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftMenu = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
`;
export const RightMenu = styled(LeftMenu)`
  width: 70%;
  justify-content: flex-end;
`;
export const RangeLabel = styled.label`
  width: 20%;
  color: #fff;
`;
export const RangeInput = styled.input`
  width: 40%;
  cursor: pointer;
  background-color: #9a905d;
  &::-webkit-slider-thumb {
    background: green;
  }
`;
export const DestinationButton = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  cursor: pointer;
  position: relative;
  overflow-y: visible;
`;
export const DestinationVisible = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DestinationSelectedH3 = styled.h3`
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
  filter: invert(55%) sepia(77%) saturate(618%) hue-rotate(56deg)
    brightness(96%) contrast(102%);
  ${LeftMenu}:hover & {
    transform: rotate(180deg);
    filter: none;
  }
`;
export const DestinationUlHidden = styled.ul`
  display: ${(props) => (props.showWilayas === false ? "none" : "flex")};
  width: 100%;
  height: 150px;
  animation: ${MenuAnimation} 0.3s forwards;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 60px;
  overflow: auto;
  text-align: justify;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.15));
  margin-right: 30px;
  border-radius: 10px 10px 0 0;
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
export const DestinationLIHidden = styled.li`
  min-height: 25%;
  max-height: 25%;
  cursor: pointer;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClusterContainer = styled.div`
  background-color: #006a79;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  transform: translate(-50%, -50%);
`;
export const LocationContainer = styled(Link)``;
export const LocationCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  width: 250px;
  height: 300px;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  z-index: 3;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 60%;
  border: 1px solid transparent;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 8px 8px 8px #ccc;
`;
export const CardText = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LocationName = styled.h4`
  color: #109fb2;
  align-self: flex-start;
  text-align: start;
  text-transform: uppercase;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 14px;
  }
  @media only screen and ${device.desktop} {
    font-size: 18px;
  }
`;
export const LocationP = styled.p`
  color: #a8a8a8;
  text-align: start;
  font-size: 14px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 10px;
  }
  @media only screen and ${device.desktop} {
    font-size: 14px;
  }
`;
export const CardBtnContainer = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftCardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  & > {
    width: 50%;
  }
`;
export const RightCardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  & > {
    width: 100%;
  }
`;
