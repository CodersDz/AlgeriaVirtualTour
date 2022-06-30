import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  PageContent,
  SearchContentWrapper,
  SearchH1,
  SearchP,
  TextContainer,
  BannerContainer,
  BannerImg,
} from "./SearchPageElements";
import CardContainer from "../../components/CardContainer/CardContainer";
import { PageContentGlobal } from "../../GlobalStyles";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import useWindowSize from "../../hooks/useWindowSize";
import getLocationInformation from "../../assets/utilities/getLocationInformation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";
import MobileSearchBar from "./Components/MobileSearchBar/MobileSearchBar";
import { generalAPILink } from "../../assets/Variables/Links";
import DesktopSearchBar from "./Components/DesktopSearchBar/DesktopSearchBar";
const Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const SearchPage = () => {
  const { t } = useTranslation();
  const [locations, setLocations] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    translatedName: t("SearchPage.Wilaya"),
    name: null,
    id_wilaya: null,
  });
  const isDesktop = useWindowSize();
  const [wilayas, setWilayas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${generalAPILink}/location`)
      .then((response) => {
        setLocations(response.data.data);
        getLocationInformation(response.data.data, setLocations, true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${generalAPILink}/wilaya`)
      .then((response) => {
        getWilayaInformation(response.data.data, setWilayas, true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`${generalAPILink}/banners/0`)
  //     .then((response) => {
  //       setBanners(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const goToWilaya = (id_wilaya) => {
    if (id_wilaya !== null) {
      navigate(`/wilaya/${id_wilaya}`);
    } else console.log("Please select a wilaya first !");
  };
  return (
    <PageContentGlobal fixed={isDesktop}>
      <PageContent>
        <SidePopUpBar />
        <BannerContainer />
        <SearchContentWrapper>
          {isDesktop ? (
            <TextContainer>
              <SearchH1>{t("SearchPage.H1")}</SearchH1>
              <SearchP>{t("SearchPage.P")}</SearchP>
            </TextContainer>
          ) : (
            <TextContainer>
              <SearchH1>{t("WilayaPage.Discover")}</SearchH1>
            </TextContainer>
          )}

          {isDesktop ? (
            <DesktopSearchBar
              wilayas={wilayas}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              goToWilaya={goToWilaya}
            />
          ) : (
            <MobileSearchBar
              wilayas={wilayas}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              goToWilaya={goToWilaya}
            ></MobileSearchBar>
          )}
          <CardContainer locations={locations} />
        </SearchContentWrapper>
        <BannerContainer>
          {/* <BannerImg src={banners.banner_recherche} /> */}
        </BannerContainer>
      </PageContent>
    </PageContentGlobal>
  );
};

export default SearchPage;
