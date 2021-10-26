import styled from "styled-components";

export const WilayaPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${
      require(`${props.bg}`).default
    })`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
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
  background-color: blue;
  transform-origin: right top;
  transform: rotate(-90deg) translateX(100%) translateY(-100%);
  height: 100px;
  width: 500px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 6;
`;
export const RightNavLi = styled.li`
  color: #fff;
  width: fit-content;
  padding: 25px;
  cursor: pointer;
`;
//-----------------------Info Components----------------------------
//-----------------------Global container Components----------------------------
export const WilayaPageContentContainer = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 150px;
`;
export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 150px;
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
  font-size: 8rem;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 3px 3px 5px #000;
`;

export const InfoP = styled.p`
  text-align: start;
  font-size: 1.5rem;
  color: #fff;
  transition: all 0.5s;
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
  font-size: 6rem;
`;
export const DiscoverCatégoriesContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 80%;
`;
export const DiscoverCatégoriesLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  margin: 5px;
  width: 48%;
  height: 20%;
  font-size: 2rem;
`;
//-----------------------Discover Components----------------------------
//-----------------------Destination Components----------------------------
export const DestinationLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  font-size: 4rem;
  height: 20%;
`;
export const DestinationListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;
export const DestinationLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  height: 50%;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  width: 100%;
`;
export const DestinationImg = styled.img`
  height: 100%;
  width: 30%;
`;
export const DestinationLiTextContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin: 5px 0;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;
export const DestinationName = styled.h3`
  text-align: start;
  font-size: 3rem;
`;
export const DestinationDescription = styled.p`
  font-size: 1.5rem;
`;
//-----------------------Destination Components----------------------------
