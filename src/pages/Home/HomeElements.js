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
export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: relative;
  display: flex;
  align-items: start;
  justify-content: end;
  flex-direction: column;
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
export const InfoH2 = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px #000;
  word-break: break-all;
  width: 100%;
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
export const InfoP = styled.p`
  max-height: calc(70% - 40px);
  font-weight: 400;
  width: 100%;
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
