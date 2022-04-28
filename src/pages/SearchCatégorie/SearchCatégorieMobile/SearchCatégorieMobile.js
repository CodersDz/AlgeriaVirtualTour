import React, { useEffect, useState } from "react";
import MobileCatégorie from "../../../components/MobileCatégorie/MobileCatégorie";
import {
  Container,
  SectionNavContainer,
  UlNav,
  LiNav,
  SlideLiNav,
  LiSpan,
  ContentContainer,
} from "./SearchCatégorieMobileElements";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
import DestinationMobileComponent from "../../Wilaya/WilayaMobile/Components/DestinationMobileComponent/DestinationMobileComponent";
const SearchCatégorieMobile = ({
  catégorieInformations,
  locations,
  mostVisitedLocations,
}) => {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState("General");
  const [generalLocations, setGeneralLocations] = useState([]);
  const [recenetAddedLocations, setRecenetAddedLocations] = useState([]);
  const [mostVisitedLocationsLocales, setMostVisitedLocationsLocales] =
    useState([]);
  const [locationsToDisplay, setLocationsToDisplay] = useState([]);

  useEffect(() => {
    setGeneralLocations(locations);
    setLocationsToDisplay(locations);

    if (locations) {
      let reversedLocation = locations.reverse();
      setRecenetAddedLocations(reversedLocation);
    }
  }, [locations]);
  useEffect(() => {
    setMostVisitedLocationsLocales(mostVisitedLocations);
  }, [mostVisitedLocations]);
  return (
    <Container>
      <MobileCatégorie catégorieInformations={catégorieInformations} />
      <SectionNavContainer>
        <UlNav>
          <LiNav
            onClick={() => {
              setCurrentSection("General");
              setLocationsToDisplay(generalLocations);
            }}
          >
            <LiSpan selected={currentSection === "General"}>
              {t("SearchCatégorie.General")}
            </LiSpan>
          </LiNav>
          <LiNav
            onClick={() => {
              setCurrentSection("The_Most_Visted");
              setLocationsToDisplay(mostVisitedLocationsLocales);
            }}
          >
            <LiSpan selected={currentSection === "The_Most_Visted"}>
              {t("SearchCatégorie.The_Most_Visted")}
            </LiSpan>
          </LiNav>
          <LiNav
            onClick={() => {
              setCurrentSection("Recent_Added");
              setLocationsToDisplay(recenetAddedLocations);
            }}
          >
            <LiSpan selected={currentSection === "Recent_Added"}>
              {t("SearchCatégorie.Recent_Added")}
            </LiSpan>
          </LiNav>
          <SlideLiNav currentSection={currentSection} />
        </UlNav>
      </SectionNavContainer>
      <ContentContainer>
        <DestinationMobileComponent locations={locationsToDisplay} />
      </ContentContainer>
    </Container>
  );
};

export default SearchCatégorieMobile;
