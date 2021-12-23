import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 20vh;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #007519;
  position: relative;
  z-index: 1;
`;
export const FooterWrapper = styled.div`
  width: 80%;
  height: 100%;
  text-align: start;
  display: flex;
  align-items: center;
`;
export const FooterElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: #fff;
  height: auto;
  width: 25%;
  height: 80%;
  font-size: 12px;
  font-weight: 400;
  border-right: 1px solid #fff;
  &:last-child {
    border-right: none;
  }
`;

export const FooterElement = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;
export const FooterElementTitle = styled.h4`
  font-weight: 400;
`;
export const FooterElementIcone = styled.span`
  margin-right: 10px;
`;
export const FooterP = styled.p`
  font-weight: 300;
`;
export const FooterA = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 25px 0 0;
`;
