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
  position: relative;
  z-index: 2;
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
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
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
