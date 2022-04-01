import React from "react";
import {
  LocationCardContainer,
  CardImg,
  CardText,
  LocationName,
  LocationP,
  CardBtnContainer,
  LeftCardBtnContainer,
  RightCardBtnContainer,
} from "./LocationCardElements";
const LocationCard = ({ location }) => {
  return (
    <LocationCardContainer
      to={{
        pathname: `/location/${location.id_location}`,
        state: { destination: location },
      }}
    >
      <CardImg src={location.cover_pic} />
      <CardText>
        <LocationName>{location.translatedName}</LocationName>
        <LocationP>{location.translatedDescription}</LocationP>
      </CardText>
      {/* <CardBtnContainer>
        <LeftCardBtnContainer>
          <img src={require("../../assets/svg/Heart.svg").default} />
        </LeftCardBtnContainer>
        <RightCardBtnContainer>
          <img src={require("../../assets/svg/Save.svg").default} />
        </RightCardBtnContainer>
      </CardBtnContainer> */}
    </LocationCardContainer>
  );
};

export default LocationCard;
