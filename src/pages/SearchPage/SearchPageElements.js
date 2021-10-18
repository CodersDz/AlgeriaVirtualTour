import styled from "styled-components";
import SearchBg from "./SearchBg.jpg";
export const SearchPageContainer = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    ),
    url(${SearchBg});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
`;
export const SearchContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const SearchContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1300px;
`;
export const SearchH1 = styled.h1`
  color: #fff;
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 100;
`;
export const SearchP = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: lighter;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
