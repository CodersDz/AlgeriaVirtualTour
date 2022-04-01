import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const LocationCardContainer = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-right: 5vw;

  @media only screen and ${device.mobile} {
    min-width: 70%;
    max-width: 70%;
  }
  @media only screen and ${device.tablet} {
    min-width: 40%;
    max-width: 40%;
  }
  @media only screen and ${device.laptop} {
    padding: 20px;
    min-width: 30%;
    max-width: 30%;
  }
  @media only screen and ${device.desktop} {
    min-width: 22%;
    max-width: 22%;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 55%;
  border: 1px solid transparent;
  border-radius: 20px;
  object-fit: cover;

  padding: 5px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    border-radius: 10px;
    box-shadow: 8px 8px 8px #ccc;
    padding: 0;
    height: 60%;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const CardText = styled.div`
  display: flex;
  height: 45%;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    padding: 0;
    height: 40%;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const LocationName = styled.h4`
  color: #109fb2;
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
  width: 20%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 30%;
  }
  @media only screen and ${device.desktop} {
    width: 20%;
  }
`;
export const RightCardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
`;
