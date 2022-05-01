import styled from "styled-components";
import device from "../../assets/Variables/responsive";
import HomeBg from "./HomeBg.jpg";
export const HomeContent = styled.div`
  background: linear-gradient(
      to right,
      rgba(75, 203, 2, 0.8),
      rgba(75, 203, 2, 0.8)
    ),
    url(${HomeBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const InfoCarousel = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    padding: 30px 20px 0 65px;
  }
  @media only screen and ${device.desktop} {
    padding: 70px 30px 0 100px;
  }
`;
export const InfoCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const InfoCarouselTitle = styled.h1`
  width: 45%;
  height: 100%;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 53px;
  }
  @media only screen and ${device.desktop} {
    font-size: 60px;
  }
`;
export const InfoCarouselImg = styled.img`
  width: 55%;
  max-height: 100%;
  position: relative;
  bottom: -4px;
  right: 0;
  align-self: end;
`;

export const InfoCarouselExpanded = styled(InfoCarousel)`
  z-index: 1;
  max-height: 100%;
`;

export const MapContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  opacity: 0.5;
  max-height: 100%;
  width: 60%;
`;

export const ImgCarousel = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
export const HomePubContainer = styled.div`
  max-height: 20%;
  min-height: 20%;
  width: 100%;
`;
export const HomePub = styled.img`
  height: 100%;
  width: 100%;
`;
