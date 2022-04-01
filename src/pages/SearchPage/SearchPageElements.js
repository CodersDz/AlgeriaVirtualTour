import styled, { keyframes, css } from "styled-components";
import SearchBg from "./SearchBg.jpg";
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
export const SearchContentContainer = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    ),
    url(${SearchBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
export const SearchContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 85%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablete} {
  }
  @media only screen and ${device.laptop} {
    width: 100%;
  }
  @media only screen and ${device.desktop} {
    width: 70%;
  }
`;
export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 15%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablete} {
  }
  @media only screen and ${device.laptop} {
  }
  @media only screen and ${device.desktop} {
  }
`;
export const BannerImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SearchH1 = styled.h1`
  color: #fff;
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;
  text-align: center !important;

  font-weight: 600;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 30px;
  }
  @media only screen and ${device.desktop} {
    font-size: 50px;
  }
`;
export const SearchP = styled.p`
  color: #fff;

  font-weight: 400;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 12px;
  }
  @media only screen and ${device.desktop} {
    font-size: 16px;
  }
`;

export const BtnContainer = styled.div`
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
  background: rgba(255, 255, 255, 0.5);
  color: #fff;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow-y: visible;
`;
export const SelectWilayaVisible = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border-radius: 30px;
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
    display: none;
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
