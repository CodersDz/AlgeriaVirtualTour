import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),
    url(${props.currentBg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    padding: ${lang === '"ar"' ? "0 100px 50px 0" : "0 0 50px 100px"};
  }
  @media only screen and ${device.desktop} {
    padding: ${lang === '"ar"' ? "0 200px 100px 0" : "0 0 100px 200px"};
  }
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 80%;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
`;
export const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  left: ${lang === '"ar"' ? "auto" : "0"};
  right: ${lang === '"ar"' ? "0" : "auto"};
`;
export const LocationName = styled.h2`
  font-weight: 600;
  width: 100%;
  text-transform: uppercase;
  text-align: start;
  text-shadow: 1px 1px 3px #000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 60px;
  }
  @media only screen and ${device.desktop} {
    font-size: 100px;
  }
`;
export const LocationP = styled.p`
  max-height: calc(70% - 40px);
  font-size: 25px;
  font-weight: 400;
  text-align: start;
  text-transform: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => (props.readMore === false ? 2 : "initial")};
  line-clamp: ${(props) => (props.readMore === false ? 2 : "initial")};
  overflow: ${(props) => (props.readMore === false ? "hidden" : "auto")};
  transition: all 3s cubic-bezier(0, 1, 0, 1);
  -ms-overflow-style: none; /* IE and Edge */
  ::-webkit-scrollbar {
    width: 10px;
    display: ${(props) => (props.readMore === false ? "none" : "block")};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 20px;
  }
  @media only screen and ${device.desktop} {
    font-size: 25px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 100%;
  }
  @media only screen and ${device.desktop} {
    width: 100%;
  }
`;

export const ReadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;
  width: 20%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 15px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
export const Visit360Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;
  width: 20%;
  height: 40px;
  padding: 25px;
  cursor: pointer;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 15px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
export const RightContainer = styled.div`
  height: 100%;
  width: 20%;
`;
export const RightWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 50%;
`;
