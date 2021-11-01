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
  padding: 75px;
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
  margin-bottom: 50px;
`;
export const CatégorieH2 = styled.h2`
  color: #a9a9a9;
  font-size: 2.5rem;
  align-self: flex-start;
  margin-bottom: 25px;
`;
export const LocationCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  min-width: 330px;
  min-height: 380px;
  margin-right: 140px;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 20px;
`;
export const CardImg = styled.img`
  width: 100%;
  max-height: 60%;
  border: 1px solid transparent;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 8px 8px 8px #ccc;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LocationName = styled.h4`
  color: #109fb2;
  align-self: flex-start;
  text-transform: uppercase;
`;
export const LocationP = styled.p`
  color: #a8a8a8;
  text-align: start;
`;
export const CardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftCardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
