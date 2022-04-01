import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const PageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 104, 0);
  flex-direction: column;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    flex-direction: row;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    width: 50%;
    padding: 75px 0 75px 75px;
  }
  @media only screen and ${device.desktop} {
    padding: 100px;
  }
`;
export const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 50px;
  width: 100%;
  text-align: start;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 38px;
  }
  @media only screen and ${device.desktop} {
    font-size: 48px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  text-align: start;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 18px;
  }
  @media only screen and ${device.desktop} {
    font-size: 25px;
  }
`;
export const RightContainer = styled.div`
  height: calc(100vh - 110px);
  width: 100%;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    height: 700px;
    max-width: 500px;
  }
  @media only screen and ${device.laptop} {
    width: 50%;
  }
  @media only screen and ${device.desktop} {
  }
`;
