import styled from "styled-components";

export const PageContainer = styled.div`
  background: rgba(4, 104, 0);
  width: 100vw;
  position: relative;
  overflow: hidden;
  color: #fff;
`;
export const PageContent = styled.div`
  width: 100%;
  margin-top: 110px;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftContainer = styled.div`
  padding: 100px;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 25px;
  text-align: start;
`;
export const RightContainer = styled.div`
  position: relative;
  width: 50%;
`;
