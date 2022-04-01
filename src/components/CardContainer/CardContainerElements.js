import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const CardContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 14px;
    height: 75%;
  }
  @media only screen and ${device.desktop} {
    font-size: 18px;
  }
`;
export const Card = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 15vh;
  border-radius: 0 0 0 50px;
  margin: 10px 10px 10px 0;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 18%;
    height: 40%;
    border-radius: 10%;
    background: ${(
      props
    ) => `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${props.bg})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
    left: ${lang === '"ar"' ? "auto" : "0"};
    right: ${lang === '"ar"' ? "0" : "auto"};
    margin: 10px;
    width: auto;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const CardContentIcone = styled.img`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: ${lang === '"ar"' ? "0" : "5px"};
  margin-left: ${lang === '"ar"' ? "5px" : "0"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 25px;
    height: 25px;
    padding: 5px;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const CardContentTitle = styled.h4`
  color: white;
  font-weight: 500;
  text-align: center !important;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.maxTablet} {
    position: absolute;
    bottom: 0;
    right: 0;
    writing-mode: vertical-rl;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    padding: 0 10px;
    font-weight: 600;
    font-size: 15px;
  }
  @media only screen and ${device.laptop} {
    font-size: 14px;
  }
  @media only screen and ${device.desktop} {
    font-size: 18px;
  }
`;
