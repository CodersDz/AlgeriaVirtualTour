import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  SearchContentContainer,
  SearchContentWrapper,
  SearchH1,
  SearchP,
  BtnContainer,
  MapIconeContainer,
  SelectWilayaContainer,
  SearchBtn,
  TextContainer,
  BannerContainer,
  BannerImg,
  SelectWilayaVisible,
  WilayaSelectedH3,
  SelectWilayaUlHidden,
  Arrow,
  SelectWilayaLIHidden,
} from "./SearchPageElements";
import CardContainer from "../../components/CardContainer/CardContainer";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import { useLocalStorage } from "../../hooks/useStorage";
import { ReactComponent as MapIcone } from "./MapIcone.svg";
import useWindowSize from "../../hooks/useWindowSize";
import getLocationInformation from "../../assets/utilities/getLocationInformation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";
import MobileSearchBar from "./Components/MobileSearchBar/MobileSearchBar";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SearchPage = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [locations, setLocations] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    translatedName: t("SearchPage.Wilaya"),
    name: null,
    id_wilaya: null,
  });
  const isDesktop = useWindowSize();
  const [wilayas, setWilayas] = useState([]);
  const [banners, setBanners] = useLocalStorage("banners", {});
  const [showWilayas, setShowWilayas] = useState(false);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/location")
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
      .get("http://www.algeriavirtualtour.com/api/wilaya")
      .then((response) => {
        getWilayaInformation(response.data.data, setWilayas, true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/banners/0")
      .then((response) => {
        setBanners(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const goToWilaya = () => {
    if (selectedOption.id_wilaya !== null) {
      history.push(`/wilaya/${selectedOption.id_wilaya}`);
    } else console.log("Please select a wilaya first !");
  };
  return (
    <PageContainerGlobal
      key="SearchPage"
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <PageContentGlobal fixed={isDesktop}>
        <SearchContentContainer>
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
              <BtnContainer>
                <SelectWilayaContainer
                  onMouseLeave={() => {
                    setShowWilayas(false);
                  }}
                >
                  <SelectWilayaVisible
                    onMouseEnter={() => {
                      setShowWilayas(true);
                    }}
                  >
                    <WilayaSelectedH3>
                      {selectedOption.translatedName}
                    </WilayaSelectedH3>
                    <Arrow />
                  </SelectWilayaVisible>
                  <SelectWilayaUlHidden
                    as={motion.div}
                    showWilayas={showWilayas}
                  >
                    {wilayas.map((wilaya) => {
                      return (
                        <SelectWilayaLIHidden
                          onClick={() => {
                            setSelectedOption(wilaya);
                            setShowWilayas(false);
                          }}
                        >
                          {wilaya.translatedName}
                        </SelectWilayaLIHidden>
                      );
                    })}
                  </SelectWilayaUlHidden>
                </SelectWilayaContainer>
                <SearchBtn onClick={goToWilaya}>
                  {t("SearchPage.Research")}
                </SearchBtn>
                <MapIconeContainer to="/Map">
                  <MapIcone />
                </MapIconeContainer>
              </BtnContainer>
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
        </SearchContentContainer>
      </PageContentGlobal>
      <Footer />
    </PageContainerGlobal>
  );
};

export default SearchPage;
