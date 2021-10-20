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
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
export const FooterElements = styled.div`
  color: #fff;
  height: auto;
  width: 50%;
  align-self: flex-start;
  font-size: 1.5rem;
`;
export const FooterA = styled.a`
  cursor: pointer;
  margin: 0 15px;
`;
