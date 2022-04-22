import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const LangContainer = styled.div`
  height: 250px;
  padding: 20px;
  width: 80%;
  max-width: 450px;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  display: ${({ langOpen }) => (langOpen ? "block" : "none")};
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    height: 180px;
    border-radius: 0 0 20px 20px;
    position: absolute;
    top: 64px;
    width: 180px;
    max-width: 180px;
  }
  @media only screen and ${device.desktop} {
    top: 94px;
  }
`;

export const LangWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const LangTitle = styled.h4`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const LangUl = styled.ul`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and ${device.laptop} {
    height: 80%;
  }
`;
export const LangLi = styled.li`
  width: 100%;
  height: 25%;
`;
export const RadioLabel = styled.label`
  width: 100%;
  height: 100%;
  padding: 5px 20px;
  border-radius: 30px;
  background-color: #fff;
  color: grey;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and ${device.laptop} {
    cursor: pointer;
  }
`;
export const RadioInput = styled.input`
  position: relative;
  &:checked::after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: absolute;
    background-color: #4bcb02;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
  @media only screen and ${device.laptop} {
    cursor: pointer;
  }
`;
export const ConfirmBtn = styled.button`
  height: 15%;
  width: 40%;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  border-radius: 25px;
`;
