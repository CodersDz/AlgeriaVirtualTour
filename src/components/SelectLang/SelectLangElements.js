import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const LangContainer = styled.div`
  width: 180px;
  height: 180px;
  padding: 20px;
  position: absolute;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 20px 20px;
  display: ${({ langOpen }) => (langOpen ? "block" : "none")};
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    top: 64px;
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
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LangUl = styled.ul`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RadioInput = styled.input`
  cursor: pointer;
  color: green;
`;
