import styled from "styled-components";
import device from "../../../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const InfoLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const InfoH1 = styled.h1`
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
    font-size: 60px;
  }
  @media only screen and ${device.desktop} {
    font-size: 100px;
  }
`;
export const InfoP = styled.p`
  max-height: calc(80% - 40px);
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  transition: all 0.5s;
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.readMore === false ? 2 : "initial")};
  line-clamp: ${(props) => (props.readMore === false ? 2 : "initial")};
  overflow: ${(props) => (props.readMore === false ? "hidden" : "auto")};
  -webkit-box-orient: vertical;
  transition: all 3s cubic-bezier(0, 1, 0, 1);
  -ms-overflow-style: none; /* IE and Edge */
  ::-webkit-scrollbar {
    width: 10px;
    display: ${(props) => (props.readMore === false ? "none" : "block")};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 20px;
  }
  @media only screen and ${device.desktop} {
    font-size: 25px;
  }
`;
export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
  height: 40px;
`;

export const ReadMoreSpan = styled.span`
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
  align-self: end;
  @media only screen and ${device.laptop} {
    font-size: 17px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
