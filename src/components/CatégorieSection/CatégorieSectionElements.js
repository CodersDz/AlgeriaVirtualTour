import styled from "styled-components";
import device from "../../assets/Variables/responsive";
export const CatégorieSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.7)
  );
  padding: 50px 0 0 0;
  width: 100%;
  margin-bottom: 5vh;
`;
export const CatégorieSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: s;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const CatégorieH2 = styled.h2`
  color: #a9a9a9;
  font-size: 50px;
  font-weight: 700;
  align-self: flex-start;
  height: 20%;
  width: 100%;
`;
export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
`;
export const ScrollBtnContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ScrollBtnWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 20%;
  }
  @media only screen and ${device.desktop} {
    width: 10%;
  }
`;
export const ScrollBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
`;
export const PContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
`;
export const P = styled.p`
  color: #a9a9a9;
  font-size: 25px;
  font-weight: 700;
`;
