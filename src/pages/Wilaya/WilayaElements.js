import styled from "styled-components";

export const WilayaPageContainer = styled.div`
  width: 100vw;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  transition: all 1s ease-in-out;
  transition-delay: 1s;
`;
//-----------------------Info Components----------------------------
export const RightWilayaNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transform-origin: right top;
  transform: rotate(-90deg) translateX(85%) translateY(-100%);
  height: 100px;
  width: 600px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 6;
`;
export const RightNavLi = styled.li`
  color: #fff;
  width: 33%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 25px;
`;
export const RightNavHr = styled.div`
  background-color: #fff;
  width: 70%;
  height: 3px;
`;
//-----------------------Info Components----------------------------
//-----------------------Global container Components----------------------------
export const WilayaPageContentContainer = styled.div`
  height: calc(100vh - 110px);
  margin-top: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 55%;
  padding: 0 0 0 100px;
  padding-bottom: ${(props) =>
    props.currentSection === "Destination" ? "0px" : "100px"};
`;
export const RightContainer = styled.div`
  height: 100%;
  width: 45%;
  padding: 100px;
  position: relative;
`;
export const Pub = styled.img`
  max-height: 20%;
  min-height: 20%;
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
//-----------------------Global container Components----------------------------
//-----------------------Info Components----------------------------
export const InfoLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const InfoLeftContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const InfoH1 = styled.h1`
  align-self: flex-start;
  font-size: 150px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 3px 3px 5px #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoP = styled.p`
  text-align: start;
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  transition: all 0.5s;
  margin: 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.readMore === false ? 2 : "initial")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 2s ease-in-out;
`;
export const InfoRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const SvgInfoImg = styled.img`
  width: 100%;
  height: 100%;
`;
//-----------------------Info Components----------------------------
//-----------------------Discover Components----------------------------
export const DiscoverLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const DiscoverRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const DiscoverLeftContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const DiscoverH1 = styled(InfoH1)`
  font-size: 120px;
`;
export const DiscoverCatégoriesContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
`;
export const DiscoverCatégoriesLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  margin: 10px;
  width: 45%;
  height: 20%;
  font-size: 40px;
  font-weight: 400;
  padding: 0 5%;
  text-align: start;
`;
//-----------------------Discover Components----------------------------
//-----------------------Destination Components----------------------------
export const DestinationLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
`;
export const DestinationRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const DestinationH1 = styled(InfoH1)`
  font-size: 60px;
`;
export const DestinationLi = styled.li`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  color: white;
  min-height: 31%;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  backdrop-filter: blur(20px);
  transition: all 0.5s ease-in-out;
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
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
`;
export const DestinationName = styled.h3`
  font-size: 40px;
  margin-left: 5px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const DestinationDescription = styled.p`
  font-size: 25px;
  font-weight: 400;
  align-self: flex-start;
  text-align: start;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const SvgDestinationImg = styled(SvgInfoImg)``;
//-----------------------Destination Components----------------------------
//-----------------------ContentLoader Components----------------------------
export const ImgLoader = styled.div`
  height: 100%;
  width: 25%;
`;
export const TextContainerLoader = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 25px;
  width: 100%;
  height: 100%;
`;
export const NameLoader = styled.div`
  width: 70%;
  height: 20%;
  margin-bottom: 20px;
`;
export const DescriptionLoader = styled.div`
  width: 100%;
  height: 60%;
`;
//-----------------------ContentLoader Components----------------------------
