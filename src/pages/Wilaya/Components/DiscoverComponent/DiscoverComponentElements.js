import styled from "styled-components";
import device from "../../../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const DiscoverLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const DiscoverLeftContainerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const DiscoverH1 = styled.h1`
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
    font-size: 80px;
  }
  @media only screen and ${device.desktop} {
    font-size: 150px;
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 70px;
  }
  @media only screen and ${device.desktop} {
    font-size: 120px;
  }
`;
export const DiscoverCatégoriesContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
`;
export const DiscoverCatégoriesLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  margin: 10px;
  width: 45%;
  height: 20%;
  font-size: 40px;
  font-weight: 400;
  padding: 0 5%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 25px;
  }
  @media only screen and ${device.desktop} {
    font-size: 40px;
  }
`;
export const DiscoverLiTitle = styled.h5`
  color: white;
  width: 100%;
  font-weight: 400;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    font-size: 25px;
  }
  @media only screen and ${device.desktop} {
    font-size: 40px;
  }
`;
