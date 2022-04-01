import React, { useState } from "react";
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
} from "./MobileBottomContainerElements";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const MobileBottomContainer = ({ zoom, mapRef }) => {
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
        <LocationsContainer showHidden={showHidden}></LocationsContainer>
      </HiddenContainer>
    </Container>
  );
};

export default MobileBottomContainer;
