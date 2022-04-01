import styled from "styled-components";
import device from "../../../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const DestinationLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
`;
export const DestinationH1 = styled.h1`
  height: 10%;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 3px 3px 5px #000;
  width: 100%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 50px;
  }
  @media only screen and ${device.desktop} {
    font-size: 60px;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
`;
export const P = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
`;

export const DestinationLi = styled.li`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  color: white;
  height: 31%;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  backdrop-filter: blur(20px);
  transition: all 0.5s ease-in-out;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    margin-bottom: 10px;
    min-height: 32%;
  }
  @media only screen and ${device.desktop} {
    margin-bottom: 20px;
    min-height: 31%;
  }
`;
export const sideBarDestinationLi = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  position: absolute;
  display: none;
`;
export const ThreePointContainer = styled.div`
  height: 100%;
  width: 5%;
  position: relative;
  display: flex;
  align-items: center;
  &:hover ${sideBarDestinationLi} {
    transform: translateX(-100px);
  }
`;
export const DestinationImgDiv = styled.div`
  height: 100%;
  min-width: 25%;
  max-width: 25%;
  overflow: hidden;
`;
export const DestinationImg = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.8s ease-in-out;
  ${DestinationLi}:hover & {
    transform: scale(1.5);
  }
`;
export const DestinationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  padding: 25px;
  width: 75%;
  height: 100%;
  ${DestinationLi}:hover & {
    width: 75%;
  }
`;
export const DestinationNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
`;
export const DestinationName = styled.h3`
  font-size: 40px;
  margin-left: ${lang === '"ar"' ? "0" : "5px"};
  margin-right: ${lang === '"ar"' ? "5px" : "0"};
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 25px;
  }
  @media only screen and ${device.desktop} {
    font-size: 35px;
  }
`;
export const DestinationDescription = styled.p`
  font-size: 25px;
  font-weight: 400;
  align-self: flex-start;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 17px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
