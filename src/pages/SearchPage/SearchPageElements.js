import styled from "styled-components";
import SearchBg from "./SearchBg.jpg";
import device from "../../assets/Variables/responsive";

export const PageContent = styled.div`
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
