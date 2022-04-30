import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
  background-color: #36ab13;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const MainTopContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TopLeftContainer = styled.div`
  height: 100%;
  width: 77%;
  display: flex;
  padding: 30px;
`;
export const MainTitleContainer = styled.p`
  width: 100%;
`;
export const MainTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const MainBottomContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MainImage = styled.img`
  position: absolute;
  z-index: 4;
  width: 100%;
  bottom: -5px;
  right: -20px;
  max-width: 350px;
  max-height: 50vh;
`;
