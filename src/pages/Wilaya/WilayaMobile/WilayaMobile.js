import React, { useState, useEffect } from "react";
import {
  MobilePageContent,
  SectionNavContainer,
  UlNav,
  LiNav,
  SlideLiNav,
  LiSpan,
  WilayaNameContainerContainer,
  WilayaName,
  ChangeableContainer,
} from "./WilayaMobileElements";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
import CatégorieSection from "../../../components/CatégorieSection/CatégorieSection";
import DestinationMobileComponent from "./Components/DestinationMobileComponent/DestinationMobileComponent";
import InfoMobileComponent from "./Components/InfoMobileComponent/InfoMobileComponent";
import CardContainer from "../../../components/CardContainer/CardContainer";
import DiscoverMobileComponent from "./Components/DiscoverMobileComponent/DiscoverMobileComponent";
const WilayaMobile = ({
  wilaya,
  locations,
  currentSection,
  setCurrentSection,
  setCurrentDiscoverOption,
  filterLocation,
}) => {
  const [mobileLocations, setMobileLocations] = useState([]);
  console.log(locations);
  useEffect(() => {
    console.log(locations);
    setMobileLocations(locations);
  }, [locations]);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const ChangeContent = () => {
    if (currentSection === "Info") {
      return <InfoMobileComponent wilaya={wilaya} />;
    } else if (currentSection === "Destination") {
      return <DestinationMobileComponent locations={locations} />;
    } else if (currentSection === "Discover") {
      return <DiscoverMobileComponent locations={locations} />;
    }
  };
  return (
    <MobilePageContent bg={wilaya.pic_cover} currentSection={currentSection}>
      <SectionNavContainer>
        <UlNav>
          <LiNav
            onClick={() => {
              if (currentSection !== "Destination") {
                setCurrentDiscoverOption({
                  name: wilaya.translatedName,
                  id: null,
                });
                filterLocation(null);
                setCurrentSection("Destination");
              }
            }}
          >
            <LiSpan selected={currentSection === "Destination"}>
              {" "}
              {t("WilayaPage.Destination")}
            </LiSpan>
          </LiNav>
          <LiNav
            onClick={() => {
              setCurrentSection("Info");
              setCurrentDiscoverOption({
                name: wilaya.translatedName,
                id: null,
              });
              filterLocation(null);
            }}
          >
            <LiSpan selected={currentSection === "Info"}>
              {t("WilayaPage.MoreInfo")}
            </LiSpan>
          </LiNav>
          <LiNav
            onClick={() => {
              setCurrentSection("Discover");
              setCurrentDiscoverOption({
                name: wilaya.translatedName,
                id: null,
              });
              filterLocation(null);
            }}
          >
            <LiSpan selected={currentSection === "Discover"}>
              {t("WilayaPage.Discover")}
            </LiSpan>
          </LiNav>
          <SlideLiNav currentSection={currentSection} />
        </UlNav>
      </SectionNavContainer>
      <WilayaNameContainerContainer>
        <WilayaName>{wilaya.translatedName}</WilayaName>
      </WilayaNameContainerContainer>
      <ChangeableContainer currentSection={currentSection}>
        <ChangeContent />
      </ChangeableContainer>
    </MobilePageContent>
  );
};

export default WilayaMobile;
