import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 26px;
  max-width: 500px;
`;
export const ImagesContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const SliderImage = styled.img`
  width: 100%;
  height: ${(props) => (props.largeImages ? "50vh" : "30vh")};
  transition: height 0.3s ease-in-out;
  border-radius: 25px 25px 10px 10px;
`;
export const View360Btn = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;
export const FullScreenBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const LocationNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
export const LocationName = styled.h2`
  color: #4bcb02;
  font-size: 24px;
  font-weight: 700;
`;
export const LocationEmplacement = styled.h3`
  color: #79818b;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
`;
export const Hr = styled.div`
  width: 100%;
  height: 2px;
  background-color: #707070;
  opacity: 0.3;
  margin: 15px 0;
`;
export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AboutTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #7e7e7e;
  text-transform: uppercase;
  padding: 10px 0;
`;
export const AboutP = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #111111;
`;
export const GaleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const GaleryTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #7e7e7e;
`;
export const GaleryImagesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const GaleryImage = styled.img`
  width: 125px;
  height: 125px;
  margin-right: 20px;
`;
export const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MapWrapper = styled.div`
  margin-top: 30px;
  width: 80%;
  height: 40vh;
  position: relative;
`;
export const MapWrapper2 = styled.div`
  width: 100%;
  height: 100%;
  border: solid 2px #707070;
  border-radius: 25px;
  overflow: hidden;
`;
export const GoToMapBtn = styled(Link)`
  border: none;
  background-color: #4bcb02;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  height: 35px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
