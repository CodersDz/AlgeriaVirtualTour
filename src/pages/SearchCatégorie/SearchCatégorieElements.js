import styled from "styled-components";

export const SearchCatégoriePageContainer = styled.div`
  width: 100vw;
`;
export const TopContainer = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),url(${
      require(`../../assets/Images/SearchImages/${props.bg}.jpg`).default
    })`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const SearchCatégoriePageContent = styled.div`
  width: 100%;
  padding: 50px;
`;

export const TopContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CatégorieImg = styled.img`
  height: 200px;
  width: 200px;
`;
export const CatégorieNom = styled.h1`
  color: #fff;
  font-size: 5rem;
  letter-spacing: 0.5rem;
`;
export const CatégorieSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CatégorieH2 = styled.h2`
  color: #d7d7d7;
  font-size: 2rem;
`;
export const LocationCard = styled.div`
  background-color: grey;
  min-width: 400px;
  min-height: 400px;
  margin: 25px;
`;
