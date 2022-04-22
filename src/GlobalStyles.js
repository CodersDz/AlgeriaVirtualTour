import styled from "styled-components";
import device from "./assets/Variables/responsive";
const lang = localStorage.getItem("language");

export const PageContainerGlobal = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${lang === '"ar"' ? "MonserratArabic" : "Montserrat"} !important;
  & span {
    font-family: ${lang === '"ar"' ? "MonserratArabic" : "Montserrat"};
  }
  & input {
    font-family: ${lang === '"ar"' ? "MonserratArabic" : "Montserrat"};
  }
  & button {
    font-family: ${lang === '"ar"' ? "MonserratArabic" : "Montserrat"};
  }
  & a {
    font-family: ${lang === '"ar"' ? "MonserratArabic" : "Montserrat"};
  }
  & p {
    text-align: justify;
    text-align-last: ${lang === '"ar"' ? "end" : "start"};
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7 {
    text-align: ${lang === '"ar"' ? "end" : "start"};
  }
  & input {
    text-align: ${lang === '"ar"' ? "end" : "start"};
  }
  & textarea {
    text-align: ${lang === '"ar"' ? "end" : "start"};
  }
`;
export const PageContentGlobal = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  margin-top: 110px;
  height: ${(props) => (props.fixed ? "calc(100vh - 110px)" : "auto")};
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    height: ${(props) => (props.fixed ? "calc(100vh - 80px)" : "auto")};
    margin-top: 80px;
  }
  @media only screen and ${device.desktop} {
    height: ${(props) => (props.fixed ? "calc(100vh - 110px)" : "auto")};
    margin-top: 110px;
  }
`;
export const ReadMoreSpan = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
  text-transform: none;
  align-self: ${lang === '"ar"' ? "end" : "start"};
  @media only screen and ${device.laptop} {
    font-size: 17px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
export const ReadMoreSpanMobile = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: 800;
  text-transform: none;
  align-self: ${lang === '"ar"' ? "end" : "start"};
  text-align: ${lang === '"ar"' ? "end" : "start"};
`;
