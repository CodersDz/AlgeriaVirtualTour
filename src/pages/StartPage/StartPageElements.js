import styled from "styled-components";
import { Link } from "react-router-dom";
export const StartPageContainer = styled.div`
  background: linear-gradient(to top, #147538, #72b43e);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  z-index: 3;
  padding: 150px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const StartPageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const StartPageImg = styled.img`
  height: 40%;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const StartPageLink = styled.button`
  background-color: #4bcb02;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 100%;
  font-weight: 600;
  border: none;
  color: #fff;
  cursor: pointer;
`;
export const EmptyDiv = styled.div`
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
  }
`;
export const AlgeriaMap = styled.img`
  position: absolute;
  width: 40%;
  z-index: 2;
  bottom: 0;
  right: 0;
`;
export const SpanDetail = styled.span`
  font-size: 100%;
  font-weight: 600;
  color: #fff;
`;
