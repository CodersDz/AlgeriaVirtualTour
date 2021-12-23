import styled from "styled-components";

export const SearchCatégoriePageContainer = styled.div`
  width: 100vw;
`;
export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TopContainer = styled.div`
  margin-top: 110px;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),url(${
      require(`../../assets/Images/SearchImages/${props.bg}.jpg`).default
    })`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const SearchCatégorieContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PubContainer = styled.div`
  width: 20%;
`;

export const TopContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: calc(40vh - 150px);
  margin-left: 150px;
`;
export const CatégorieImg = styled.img`
  height: 150px;
  width: 150px;
`;
export const CatégorieNom = styled.h1`
  color: #fff;
  font-size: 120px;
  font-weight: 600;
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
