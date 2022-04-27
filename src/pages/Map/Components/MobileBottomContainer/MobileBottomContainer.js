import React, { useRef, useState } from "react";
import {
  Container,
  ZoomContainer,
  ZoomWrapper,
  ZoomLeftContainer,
  ZoomSpan,
  ZoomRightContainer,
  RangeInput,
  BarContainer,
  HiddenContainer,
  Bar,
  LocationsContainer,
  NoLocationMessage,
} from "./MobileBottomContainerElements";
import ScrollContainer from "react-indiana-drag-scroll";
//LocationCard
import {
  LocationCard,
  LocationImageContainer,
  LocationImage,
  LocationInformationsContainer,
  LocationTitle,
  LocationP,
  BtnContainer,
} from "./MobileBottomContainerElements";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
import { useNavigate } from "react-router-dom";
const MobileBottomContainer = ({
  zoom,
  mapRef,
  locationsToDisplay,
  setZoom,
  setLat,
  setLng,
}) => {
  const ref = useRef();
  const navigate = useNavigate();
  console.log(locationsToDisplay);
  const [showHidden, setShowHidden] = useState(false);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <Container showHidden={showHidden}>
      <ZoomContainer>
        <ZoomWrapper>
          <ZoomLeftContainer>
            <ZoomSpan>{t("MapPage.Perimeter")}</ZoomSpan>
          </ZoomLeftContainer>
          <ZoomRightContainer>
            <RangeInput
              type="range"
              id="volume"
              name="volume"
              className="input"
              defaultValue={zoom}
              min="3"
              max="18"
              onChange={(e) => {
                mapRef.current.setZoom(parseInt(e.target.value));
              }}
            />
          </ZoomRightContainer>
        </ZoomWrapper>
      </ZoomContainer>
      <HiddenContainer>
        <BarContainer
          onClick={() => {
            setShowHidden(!showHidden);
          }}
        >
          <Bar />
        </BarContainer>
        <LocationsContainer showHidden={showHidden}>
          {locationsToDisplay.length !== 0 ? (
            <ScrollContainer
              innerRef={ref}
              className="ScrollContainer"
              vertical="false"
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "visible",
              }}
            >
              {locationsToDisplay.map((location, index) => {
                return (
                  <LocationCard
                    key={index}
                    onClick={() => {
                      setZoom(17);
                      setLat(parseFloat(location.latitude));
                      setLng(parseFloat(location.longitude));
                      setShowHidden(false);
                    }}
                    onDoubleClick={() => {
                      navigate(`/location/${location.id_location}`, {
                        state: { destination: location },
                      });
                    }}
                  >
                    <LocationImageContainer>
                      <LocationImage src={location.cover_pic} />
                    </LocationImageContainer>
                    <LocationInformationsContainer>
                      <LocationTitle>{location.translatedName}</LocationTitle>
                      <LocationP>{location.translatedDescription}</LocationP>
                    </LocationInformationsContainer>
                    <BtnContainer></BtnContainer>
                  </LocationCard>
                );
              })}
            </ScrollContainer>
          ) : (
            <NoLocationMessage>
              {t("General.NoLocationFound")}
            </NoLocationMessage>
          )}
        </LocationsContainer>
      </HiddenContainer>
    </Container>
  );
};

export default MobileBottomContainer;
