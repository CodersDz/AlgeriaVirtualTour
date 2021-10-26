import styled from "styled-components";
import { Link } from "react-router-dom";

//-----------------Elements imports---------------

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
  padding: 50px;
`;
export const InfoCarouselExpanded = styled(InfoCarousel)`
  z-index: 4;
`;
export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: relative;
`;
export const InfoContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;
export const InfoH2 = styled.h2`
  font-size: 8rem;
  text-transform: uppercase;
  text-align: start;
  text-shadow: 2px 2px 5px #000;
`;
export const InfoP = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: start;
  text-transform: none;
  padding: 50px 0;
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
  min-width: 35%;
  position: static;
  max-height: 100%;
  margin: 0 30px 0 0;
  background: ${(props) => `
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
`;
export const ThumbnailImageExpanded = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -2;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),
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
  padding: 100px;
`;
export const ThumbnailImageExpandedContainer = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
`;

export const DecouvrirePlus = styled(Link)`
  width: 35%;
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
  width: 70%;
`;
export const ReadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 300;
  font-size: 1.3rem;
  border-radius: 30px;
  width: 50%;
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
  font-weight: 300;
  font-size: 1.3rem;
  border-radius: 30px;
  width: 50%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
`;
