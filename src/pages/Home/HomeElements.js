import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4)),
    url(${props.currentBg})`};
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export const HomeContent = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  display: flex;
`;

export const InfoCarousel = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -1;
  padding: 0 70px 25px 70px;
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
`;
export const InfoContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`;
export const MapContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  opacity: 0.5;
  height: 100%;
  width: 60%;
`;
export const InfoH2 = styled.h2`
  font-size: 140px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  text-shadow: 1px 1px 3px #000;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const InfoP = styled.p`
  font-size: 25px;
  font-weight: 400;
  text-align: start;
  text-transform: none;
  margin: 20px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${(props) =>
    props.readMore === false ? "2" : "initial"};
  line-clamp: ${(props) => (props.readMore === false ? "2" : "initial")};
  transition: all 3s cubic-bezier(0, 1, 0, 1);
`;
export const ImgCarousel = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
export const HomePub = styled.img`
  max-height: 20%;
  min-height: 20%;
  width: 100%;
  position: relative;
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
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-transform: uppercase;
  padding: 40px;
`;
export const ThumbnailImageText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ThumbnailImageTextH5 = styled.h5`
  position: absolute;
  bottom: 0;
  font-weight: 600;
  font-size: 42px;
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
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 100px;
`;
export const SvgWilaya = styled.div``;

export const DecouvrirePlus = styled(Link)`
  min-width: 42%;
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
  width: 100%;
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
  width: 40%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
`;
export const DiscoverMoreBtn = styled(Link)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;
  width: 40%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
`;
