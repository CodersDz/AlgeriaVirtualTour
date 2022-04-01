import styled from "styled-components";
import device from "../../assets/Variables/responsive";
//-----------------------Info Components----------------------------
const lang = localStorage.getItem("language");
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
  width: 70vh;
  position: absolute;
  bottom: 20px;
  right: 0;
  z-index: 6;
  height: 5vw;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
  }
  @media only screen and ${device.desktop} {
  }
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
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 20px;
  }
  @media only screen and ${device.desktop} {
    font-size: 25px;
  }
`;
export const RightNavHr = styled.div`
  background-color: #fff;
  width: 70%;
  height: 3px;
`;
//-----------------------Info Components----------------------------
//-----------------------Global container Components----------------------------
export const PageContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 55%;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    padding-left: 70px;
    padding-bottom: ${(props) =>
      props.currentSection === "Destination" ? "0px" : "60px"};
    padding-right: ${(props) =>
      props.currentSection === "Info" ? "10px" : "0px"};
  }
  @media only screen and ${device.desktop} {
    padding-left: 100px;
    padding-bottom: ${(props) =>
      props.currentSection === "Destination" ? "0px" : "100px"};
    padding-right: ${(props) =>
      props.currentSection === "Info" ? "80px" : "0px"};
  }
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
export const SvgInfoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;
export const InfoRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
//-----------------------Info Components----------------------------
//-----------------------Discover Components----------------------------
export const DiscoverRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
//-----------------------Discover Components----------------------------
//-----------------------Destination Components----------------------------
//-----------------------Destination Components----------------------------
export const DestinationRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

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
