import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  CatégorieSectionContainer,
  CatégorieSectionWrapper,
  CatégorieH2,
  ScrollBtnContainer,
  ScrollBtnWrapper,
  ScrollBtn,
  Div,
  P,
} from "./CatégorieSectionElements";
import ScrollContainer from "react-indiana-drag-scroll";
import LocationCard from "../LocationCard/LocationCard";
import { ReactComponent as ForwardIcone } from "./Svg/ForwardIcone.svg";
import { ReactComponent as BackwardIcone } from "./Svg/BackwardIcone.svg";

const CatégorieSection = ({ locations, id, input, sectionName }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  let filtredNamesLocations = locations.filter((location) => {
    if (input === "") {
      return location;
    } else if (
      location.translatedName.toLowerCase().includes(input.toLowerCase())
    ) {
      return location;
    }
  });
  const ref = useRef();
  const scrollLeft = () => {
    ReactDOM.findDOMNode(ref.current).scrollTo(0, 0);
  };
  const scrollRight = () => {
    ReactDOM.findDOMNode(ref.current).scrollTo(500000, 0);
  };
  let filtredLocations = filtredNamesLocations.filter((location) => {
    if (id === null) {
      return location;
    } else {
      if (location.id_wilaya === id) return location;
    }
  });
  return (
    <CatégorieSectionContainer>
      <CatégorieSectionWrapper>
        <CatégorieH2>{sectionName}</CatégorieH2>
        {filtredLocations.length !== 0 ? (
          <Div>
            <ScrollContainer
              innerRef={ref}
              className="ScrollContainer"
              id={`scroll_${sectionName}`}
              vertical="false"
              style={{
                display: "flex",
                flexDirection: "row",
                minHeight: "80%",
                maxHeight: "80%",
              }}
            >
              {filtredLocations.map((location) => {
                return (
                  <LocationCard
                    key={location.id_location}
                    location={location}
                  />
                );
              })}
            </ScrollContainer>
            <ScrollBtnContainer>
              <ScrollBtnWrapper>
                <ScrollBtn onClick={scrollLeft}>
                  <BackwardIcone />
                </ScrollBtn>
                <ScrollBtn onClick={scrollRight}>
                  <ForwardIcone style={{ transform: "rotate(180deg)" }} />
                </ScrollBtn>
              </ScrollBtnWrapper>
            </ScrollBtnContainer>
          </Div>
        ) : (
          <Div>
            <P as={motion.p} whileHover={{ scale: 1.1 }}>
              {t("General.NoLocationFound")}
            </P>
          </Div>
        )}
      </CatégorieSectionWrapper>
    </CatégorieSectionContainer>
  );
};

export default CatégorieSection;
