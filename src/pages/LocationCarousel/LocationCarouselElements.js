import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4)),
    url(${props.currentBg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  color: #fff;
`;
export const PageContent = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: row;
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 80%;
  padding: 0 0 100px 200px;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ContentContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const LocationName = styled.h2`
  font-weight: 600;
  font-size: 100px;
  text-transform: uppercase;
  text-align: start;
  text-shadow: 1px 1px 3px #000;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const LocationP = styled.p`
  font-size: 25px;
  font-weight: 400;
  text-align: start;
  text-transform: none;
  margin: 20px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${(props) =>
    props.readMore === false ? "2" : "initial"};
  line-clamp: ${(props) => (props.readMore === false ? "2" : "initial")};
  transition: all 3s cubic-bezier(0, 1, 0, 1);
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const ReadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;
  width: 40%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
`;
export const Visit360Btn = styled(Link)`
  min-width: 42%;
  max-height: 100%;
  margin: 0 30px 0 0;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div`
  height: 100%;
  width: 20%;
  padding: 0 0 100px 0;
`;
export const RightWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 50%;
`;
