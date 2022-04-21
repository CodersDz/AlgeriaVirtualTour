import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import device from "../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const HomeContent = styled.div`
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(75, 203, 2, 0.8), rgba(75, 203, 2, 0.8)),
    url(${props.currentBg})`};
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
export const ThumbnailImages = styled.div`
  display: flex;
  height: 60%;
  padding: 30px 0;
`;
export const ThumbnailImage = styled.div`
  cursor: pointer;
  min-width: 42%;
  max-height: 100%;
  margin: 0 30px 0 0;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    padding: 25px;
  }
  @media only screen and ${device.desktop} {
    padding: 30px;
  }
`;
export const ThumbnailImageText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ThumbnailImageTextH5 = styled.h5`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-weight: 600;
  word-break: break-word;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 30px;
  }
  @media only screen and ${device.desktop} {
    font-size: 44px;
  }
`;
export const ThumbnailImageExpanded = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    padding: 25px;
  }
  @media only screen and ${device.desktop} {
    padding: 100px;
    padding-top: 20px;
  }
`;
export const SvgWilaya = styled.div``;

export const DIscoverMore = styled(Link)`
  min-width: 40%;
  max-height: 100%;
  margin: 0 30px 0 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  width: 100%;
  height: 40px;
`;
export const DiscoverMoreBtn = styled(Link)`
  background-color: #4bcb02;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;
  width: 35%;
  height: 100%;
  padding: 25px;
  cursor: pointer;
  text-transform: none;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 17px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
