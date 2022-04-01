import React, { useState, useRef, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Container } from "./DestinationMobileComponentElements";
import { motion } from "framer-motion";
import { Wrapper, EmptyP } from "./DestinationMobileComponentElements";
import LocationCard from "../../../../../components/LocationCard/LocationCard";
import useTranslation from "../../../../../hooks/useTranslation/useTranslation";
const DestinationMobileComponent = ({ locations }) => {
  console.log(locations);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const ref = useRef();
  const [localesLocations, setLocalesLocations] = useState([]);
  useEffect(() => {
    setLocalesLocations(locations);
  }, [locations]);
  return (
    <Container>
      <Wrapper>
        {localesLocations.length !== 0 ? (
          <ScrollContainer
            innerRef={ref}
            vertical="false"
            className="ScrollContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              minHeight: "80%",
              maxHeight: "100%",
              overflowX: "visible",
            }}
          >
            {localesLocations.map((location) => {
              return (
                <LocationCard key={location.id_location} location={location} />
              );
            })}
          </ScrollContainer>
        ) : (
          <EmptyP draggable as={motion.p} whileHover={{ scale: 1.1 }}>
            {t("General.NoLocationFound")}
          </EmptyP>
        )}
      </Wrapper>
    </Container>
  );
};

export default DestinationMobileComponent;
