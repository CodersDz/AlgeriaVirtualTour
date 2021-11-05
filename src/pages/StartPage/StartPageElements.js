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
`;
export const StartPageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const StartPageImg = styled.img``;
export const StartPageLink = styled(Link)`
  position: absolute;
  bottom: 0;
`;
