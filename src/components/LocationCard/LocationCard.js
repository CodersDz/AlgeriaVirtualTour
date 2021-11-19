import React from "react";
import {
  LocationCardContainer,
  CardImg,
  CardText,
  LocationName,
  LocationP,
  CardBtnContainer,
  LeftCardBtnContainer,
} from "./LocationCardElements";
const LocationCard = ({ location }) => {
  return (
    <LocationCardContainer>
      <CardImg src={location.cover_pic} />
      <CardText>
        <LocationName>{location.name}</LocationName>
        <LocationP>{location.description}</LocationP>
      </CardText>
      <CardBtnContainer>
        <LeftCardBtnContainer>
          <img src={require("../../assets/svg/Internet.svg").default} />
          <img src={require("../../assets/svg/Heart.svg").default} />
        </LeftCardBtnContainer>
        <img src={require("../../assets/svg/Save.svg").default} />
      </CardBtnContainer>
    </LocationCardContainer>
  );
};

export default LocationCard;
