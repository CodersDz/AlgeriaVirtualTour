import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 20vh;
  text-align: start;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: start;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const FooterElements = styled.div`
  display: flex;
  color: #fff;
  height: auto;
  width: 50%;
  padding-top: 25px;
  align-self: flex-start;
  font-size: 20px;
  font-weight: 400;
`;
export const FooterElementsImportantText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 25px;
`;
export const FooterElementsText = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
export const FooterA = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 25px 0 0;
`;
