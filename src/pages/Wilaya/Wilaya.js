import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import {
  PageContent,
  LeftContainer,
  RightContainer,
  InfoRightContainer,
  SvgInfoImg,
  RightWilayaNav,
  RightNavLi,
  DiscoverRightContainer,
  DestinationRightContainer,
  SvgDestinationImg,
  RightNavHr,
  Pub,
} from "./WilayaElements";
import {
  ImgLoader,
  TextContainerLoader,
  NameLoader,
  DescriptionLoader,
} from "./WilayaElements";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AnimateSharedLayout, motion } from "framer-motion";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import useWindowSize from "../../hooks/useWindowSize";
import "./WilayaStyles.css";

import { useLocalStorage } from "../../hooks/useStorage";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";

import getLocationInformation from "../../assets/utilities/getLocationInformation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";

//Component imports
import DestinationComponent from "./Components/DestinationComponent/DestinationComponent";
import DiscoverComponent from "./Components/DiscoverComponent/DiscoverComponent";
import InfoComponent from "./Components/InfoComponent/InfoComponent";

//Mobile
import WilayaMobile from "./WilayaMobile/WilayaMobile";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Wilaya = (props) => {
  const { wilayaId } = useParams();
  const [locations, setLocations] = useState([]);
  const [wilaya, setWilaya] = useState({});
  const isDesktop = useWindowSize();
  useEffect(() => {
    if (props.location.state) {
      let wilayaInformation = props.location.state.wilaya;
      getWilayaInformation(wilayaInformation, setWilaya, false);
      getLocation(wilayaId);
    } else {
      axios
        .get(`https://www.algeriavirtualtour.com/api/wilaya/${wilayaId}`)
        .then((response) => {
          let wilayaInformation = response.data.data;
          getWilayaInformation(wilayaInformation, setWilaya, false);
          getLocation(wilayaId);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const getLocation = (id) => {
    console.log(id);
    axios
      .get(`https://www.algeriavirtualtour.com/api/location?wilaya=${id}`)
      .then((response) => {
        getLocationInformation(response.data.data, setLocations, true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterLocation = (id) => {
    let newLocations = locations.filter((location) => {
      if (id === null) {
        return location;
      } else if (location.id_type_location === id) {
        return location;
      } else return null;
    });
    setFilteredLocation(newLocations);
  };
  const [filteredLocation, setFilteredLocation] = useState(locations);

  const [readMore, setReadMore] = useState(false);

  const [banners, setBanners] = useLocalStorage("banners", {});
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  const [currentSection, setCurrentSection] = useState("Info");

  const [currentDiscoverOption, setCurrentDiscoverOption] = useState({
    name: wilaya.translatedName,
    id: null,
  });

  const ChangeLeft = () => {
    if (currentSection === "Info") {
      return (
        <InfoComponent
          wilaya={wilaya}
          setReadMore={setReadMore}
          readMore={readMore}
        />
      );
    } else if (currentSection === "Discover") {
      return (
        <DiscoverComponent
          wilaya={wilaya}
          filterLocation={filterLocation}
          setCurrentDiscoverOption={setCurrentDiscoverOption}
          setCurrentSection={setCurrentSection}
        />
      );
    } else if (currentSection === "Destination") {
      return (
        <DestinationComponent
          filteredLocation={filteredLocation}
          currentDiscoverOption={currentDiscoverOption}
        />
      );
    }
  };

  const ChangeRight = () => {
    if (currentSection === "Info") {
      return (
        <InfoRightContainer>
          <SvgInfoImg
            as={motion.img}
            layoutId={"SvgImg"}
            animate={{ scale: 1.1 }}
            src={wilaya.pic_map}
          />
        </InfoRightContainer>
      );
    } else if (currentSection === "Discover") {
      return (
        <DiscoverRightContainer>
          <SvgInfoImg
            as={motion.img}
            layoutId={"SvgImg"}
            animate={{ scale: 0.8 }}
            src={wilaya.pic_map}
          />
        </DiscoverRightContainer>
      );
    } else if (currentSection === "Destination") {
      return (
        <DestinationRightContainer>
          <SvgInfoImg
            as={motion.img}
            layoutId={"SvgImg"}
            animate={{ scale: 1.2 }}
            src={wilaya.pic_map}
          />
        </DestinationRightContainer>
      );
    } else return null;
  };
  return (
    <AnimateSharedLayout>
      <PageContainerGlobal
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Navbar />
        <PageContentGlobal fixed={isDesktop}>
          {isDesktop ? (
            <PageContent bg={wilaya.pic_cover}>
              <SidePopUpBar />
              <LeftContainer currentSection={currentSection}>
                <ChangeLeft />
              </LeftContainer>
              <RightContainer>
                <ChangeRight />
                {/* <Pub src={banners.banner_location} /> */}
                <RightWilayaNav>
                  <RightNavLi
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
                    {t("WilayaPage.Destination")}
                    {currentSection === "Destination" ? (
                      <RightNavHr as={motion.div} />
                    ) : null}
                  </RightNavLi>
                  <RightNavLi
                    onClick={() => {
                      setCurrentSection("Info");
                      setCurrentDiscoverOption({
                        name: wilaya.translatedName,
                        id: null,
                      });
                      filterLocation(null);
                    }}
                  >
                    {t("WilayaPage.MoreInfo")}
                    {currentSection === "Info" ? (
                      <RightNavHr as={motion.div} />
                    ) : null}
                  </RightNavLi>
                  <RightNavLi
                    onClick={() => {
                      setCurrentSection("Discover");
                      setCurrentDiscoverOption({
                        name: wilaya.translatedName,
                        id: null,
                      });
                      filterLocation(null);
                    }}
                  >
                    {t("WilayaPage.Discover")}
                    {currentSection === "Discover" ? (
                      <RightNavHr as={motion.div} />
                    ) : null}
                  </RightNavLi>
                </RightWilayaNav>
              </RightContainer>
            </PageContent>
          ) : (
            <WilayaMobile
              wilaya={wilaya}
              locations={locations}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              setCurrentDiscoverOption={setCurrentDiscoverOption}
              filterLocation={filterLocation}
            />
          )}
        </PageContentGlobal>
        <Footer />
      </PageContainerGlobal>
    </AnimateSharedLayout>
  );
};

export default Wilaya;
