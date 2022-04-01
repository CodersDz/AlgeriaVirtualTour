import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${device.laptop} {
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Imgs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  @media only screen and ${device.laptop} {
    height: 70%;
  }
`;
export const MoniteurImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 350px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const PcPortableImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 50%;
  max-height: 60%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    max-width: 50%;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const TéléphoneImg = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 20%;
  max-height: 40%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    left: 1%;
  }
  @media only screen and ${device.laptop} {
    left: 1%;
  }
  @media only screen and ${device.desktop} {
    left: 8%;
  }
`;
export const TabeletteImg = styled.img`
  position: absolute;
  bottom: -5px;
  max-width: 40%;
  max-height: 50%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    left: 10%;
  }
  @media only screen and ${device.laptop} {
    left: 10%;
  }
  @media only screen and ${device.desktop} {
    left: 18%;
  }
`;
export const StoreContainer = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45%;
  @media only screen and ${device.laptop} {
    height: 30%;
  }
`;
export const StoreP = styled.p`
  color: #d8d8d8;
  font-size: 28px;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  text-align: center !important;
`;
export const StoreIcones = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and ${device.tablet} {
    flex-direction: row;
  }
`;
export const StoreIcone = styled.img`
  margin: 20px;
`;
