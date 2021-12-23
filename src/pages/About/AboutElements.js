import styled from "styled-components";

export const ContactPageContainer = styled.div`
  background: rgba(4, 104, 0);
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 3;
  overflow: hidden;
`;
export const AboutContentContainer = styled.div`
  height: calc(80vh - 150px);
  margin-top: 110px;
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AboutContentLeft = styled.div`
  height: 100%;
  width: 50%;
`;
export const AboutContentLeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AboutH1 = styled.h1`
  color: #fff;
  align-self: flex-start;
  font-weight: 700;
  font-size: 48px;
  margin: 35px 0;
`;
export const AboutP = styled.p`
  color: #fff;
  font-size: 25px;
  text-align: start;
  font-weight: 400;
  width: 100%;
`;
export const RightContainer = styled.div`
  position: relative;
  width: 50%;
`;
