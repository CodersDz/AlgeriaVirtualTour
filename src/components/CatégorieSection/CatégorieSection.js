import React from "react";
import {
  CatégorieSectionContainer,
  CatégorieH2,
} from "./CatégorieSectionElements";
import ScrollContainer from "react-indiana-drag-scroll";
import LocationCard from "../LocationCard/LocationCard";

const CatégorieSection = ({ locations, sectionName }) => {
  return (
    <CatégorieSectionContainer>
      <CatégorieH2>{sectionName}</CatégorieH2>
      <ScrollContainer
        className="ScrollContainer"
        vertical="false"
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "80%",
          maxHeight: "80%",
        }}
      >
        {locations.map((location) => {
          return <LocationCard location={location} />;
        })}
      </ScrollContainer>
    </CatégorieSectionContainer>
  );
};

export default CatégorieSection;
