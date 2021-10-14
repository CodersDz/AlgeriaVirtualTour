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
`;
export const ImgCarousel = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const HomePub = styled.img`
  max-height: 20%;
  min-height: 20%;
  width: 100%;
`;
export const ThumbnailImages = styled.div`
  display: flex;
  max-height: 60%;
  min-height: 60%;
`;
export const ThumbnailImage = styled.img`
  width: 35%;
  margin: 30px 30px 30px 0;
`;
