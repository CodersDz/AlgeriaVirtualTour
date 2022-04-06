import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  DestinationLeftContainer,
  DestinationRightContainer,
  DestinationH1,
  DestinationNameContainer,
  DestinationLi,
  DestinationImgDiv,
  DestinationImg,
  DestinationTextContainer,
  DestinationName,
  DestinationDescription,
  Div,
  P,
} from "./DestinationComponentElements";
import { ReactComponent as Position } from "../../Svg/Position.svg";
import ScrollContainer from "react-indiana-drag-scroll";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const DestinationComponent = ({ filteredLocation, currentDiscoverOption }) => {
  console.log(currentDiscoverOption);
  const navigate = useNavigate();
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const goToLocation = (destination) => {
    navigate(`/location/${destination.id_location}`, {
      state: { destination: destination },
    });
  };
  return (
    <DestinationLeftContainer>
      <DestinationH1 as={motion.h1} layoutId={"h1"}>
        {currentDiscoverOption.name}
      </DestinationH1>

      {filteredLocation.length !== 0 ? (
        <ScrollContainer
          hideScrollbars="false"
          className="ScrollContainer"
          horizontal="false"
        >
          {filteredLocation.map((destination, index) => {
            return (
              <DestinationLi
                key={index}
                as={motion.li}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={() => {
                  goToLocation(destination);
                }}
              >
                <DestinationImgDiv>
                  <DestinationImg src={destination.cover_pic} />
                </DestinationImgDiv>
                <DestinationTextContainer>
                  <DestinationNameContainer>
                    <Position />
                    <DestinationName>
                      {destination.translatedName}
                    </DestinationName>
                  </DestinationNameContainer>
                  <DestinationDescription>
                    {destination.translatedDescription}
                  </DestinationDescription>
                </DestinationTextContainer>
              </DestinationLi>
            );
          })}
        </ScrollContainer>
      ) : (
        <Div>
          <P as={motion.p} whileHover={{ scale: 1.1 }}>
            {t("General.NoLocationFound")}
          </P>
        </Div>
      )}
    </DestinationLeftContainer>
  );
};

export default DestinationComponent;
