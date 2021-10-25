import styled from "styled-components";

export const HomeContainer = styled.div`
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url(${props.currentBg})`};
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export const HomeContent = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
`;
