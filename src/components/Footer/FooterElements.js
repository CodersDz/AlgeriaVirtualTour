import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const FooterContainer = styled.footer`
  width: 100%;
  height: 20vh;
  display: flex;
  text-align: justify;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00c22a;
  position: relative;
  z-index: 1;
  & p {
    text-align-last: start;
  }
`;
export const FooterWrapper = styled.div`
  height: 100%;
  text-align: start;
  display: flex;
  align-items: center;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 90%;
  }
  @media only screen and ${device.desktop} {
    width: 80%;
  }
`;
export const FooterElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: #fff;
  height: auto;
  width: 25%;
  height: 80%;
  font-size: 12px;
  font-weight: 400;
  border-right: 1px solid #fff;
  &:last-child {
    border-right: none;
  }
  padding: 5px;
`;

export const FooterElementLink = styled(Link)`
  width: 70%;
  display: flex;
  align-items: center;
`;
export const FooterElement = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;
export const FooterElementTitle = styled.h4`
  font-weight: 400;
`;
export const FooterElementIcone = styled.a`
  margin-right: 10px;
`;
export const FooterP = styled.p`
  font-weight: 300;
  text-align: start !important;
`;
export const FooterA = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 25px 0 0;
`;
