import styled from "styled-components";
import device from "../../assets/Variables/responsive";

export const ContentContainer = styled.div`
  background: rgba(4, 104, 0);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AboutH1 = styled.h1`
  color: #fff;
  width: 100%;
  font-weight: 700;
  font-size: 48px;
  margin: 35px 0;
`;
export const AboutP = styled.p`
  color: #fff;
  font-weight: 400;
  width: 100%;
  font-size: 15px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 20px;
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
