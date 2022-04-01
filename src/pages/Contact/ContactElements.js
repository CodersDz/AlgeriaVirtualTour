import styled from "styled-components";
import device from "../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
export const ContentContainer = styled.div`
  background: rgba(4, 104, 0);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    flex-direction: row;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    width: 50%;
    padding: 25px;
    padding-left: 40px;
  }
  @media only screen and ${device.desktop} {
    padding: 75px;
  }
`;
export const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(4, 60, 0);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px 30px 50px;
  border-radius: 20px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    padding: 30px;
  }
  @media only screen and ${device.laptop} {
    padding: 50px 50px 30px 50px;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const AboutH1 = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 40px;
  height: 10%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    font-size: 30px;
  }
  @media only screen and ${device.laptop} {
  }
  @media only screen and ${device.desktop} {
  }
`;
export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 52%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const InputContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    margin: 15px 0;
    height: 70px;
  }
  @media only screen and ${device.laptop} {
    width: 48%;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const InputSpan = styled.span`
  font-weight: 400;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${lang === '"ar"' ? "end" : "start"};
  height: 30%;
  font-size: 13px;
  @media only screen and ${device.maxTablet} {
    margin-bottom: 10px;
  }
`;
export const ContactInput = styled.input`
  height: 45%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 25px;
  border: 1px solid #707070;
  padding: 25px 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #b7b7b7;
    font-weight: 400;
    font-size: 15px;
  }
`;
export const ContactTextArea = styled.textarea`
  width: 100%;
  resize: none;
  background-color: #ffffff;
  height: 40%;
  border-radius: 26px;
  border: 1px solid #707070;
  margin: 10px 0 20px 0;
  padding: 25px 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #b7b7b7;
    font-weight: 400;
    font-size: 15px;
  }
  @media only screen and ${device.maxTablet} {
    min-height: 200px;
  }
`;
export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 16px;
  border-radius: 10px;
  width: 40%;
  height: 50px;
  padding: 25px;
  cursor: pointer;
  box-sizing: border-box;
`;
export const RightContainer = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
    height: 700px;
    max-width: 500px;
  }
  @media only screen and ${device.laptop} {
    width: 50%;
  }
  @media only screen and ${device.desktop} {
  }
`;
