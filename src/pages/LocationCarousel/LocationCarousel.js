import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  PageContainer,
  PageContent,
  LeftContainer,
  LeftWrapper,
  ContentContainer,
  LocationName,
  LocationP,
  BtnContainer,
  ReadMoreBtn,
  Visit360Btn,
  RightContainer,
  RightWrapper,
  ArrowsContainer,
} from "./LocationCarouselElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import getLocationInformation from "../../assets/utilities/getLocationInformation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as RightArrow } from "./RightArrow.svg";
import { useParams } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Catégories from "../../assets/utilities/Catégories";
import LocationCarousselMobile from "./LocationCarousselMobile/LocationCarousselMobile";

const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const LocationCarousel = (props) => {
  const isDesktop = useWindowSize();
  const locationId = useParams();
  console.log(locationId.locationId);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [readMore, setReadMore] = useState(false);
  const [currentBg, setCurrentBg] = useState("");
  const [destination, setDestination] = useState({ images: [] });
  const [images, setImages] = useState([]);
  const [currentCatégorie, setCurrentCatégorie] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://www.algeriavirtualtour.com/api/location/${locationId.locationId}`
      )
      .then((response) => {
        let locationInformation = response.data.data;
        getLocationInformation(locationInformation, setDestination, false);
        setCurrentBg(
          locationInformation.images.length !== 0
            ? locationInformation.images[0].url
            : locationInformation.pic_cover
        );
        setImages(locationInformation.images);
        getCurrentCatégorie(locationInformation.id_type_location);
        increment(locationInformation.id_location);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getCurrentCatégorie = (id_cat) => {
    let catégorie = Catégories.find((cat) => cat.idCatégorie === id_cat);
    console.log(id_cat);
    console.log(catégorie);
    setCurrentCatégorie(catégorie);
  };
  const increment = (id) => {
    console.log(
      `http://www.algeriavirtualtour.com/api/location/${id}/increment`
    );
    axios
      .put(`http://www.algeriavirtualtour.com/api/location/${id}/increment`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [index, setIndex] = useState(0);
  const goLeft = () => {
    if (images.length !== 0) {
      if (images.length !== 1) {
        if (index - 1 >= 0) {
          let newIndex = index - 1;
          setIndex(newIndex);
          setCurrentBg(images[newIndex].url);
        } else {
          let newIndex = images.length - 1;
          setIndex(newIndex);
          setCurrentBg(images[newIndex].url);
        }
      }
    }
  };
  const goRight = () => {
    if (images.length !== 0) {
      if (images.length !== 1) {
        if (index + 1 <= images.length - 1) {
          let newIndex = index + 1;
          setIndex(newIndex);
          setCurrentBg(images[newIndex].url);
        } else {
          setIndex(0);
          setCurrentBg(images[0].url);
        }
      }
    }
  };
  return (
    <PageContainerGlobal>
      <Navbar />
      <PageContentGlobal fixed={isDesktop}>
        <SidePopUpBar />
        {isDesktop ? (
          <PageContent currentBg={currentBg}>
            <LeftContainer>
              <LeftWrapper>
                <ContentContainer>
                  <LocationName>{destination.translatedName}</LocationName>
                  <LocationP readMore={readMore}>
                    {destination.translatedDescription}
                  </LocationP>
                  <BtnContainer>
                    <ReadMoreBtn
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      {!readMore && (
                        <motion.span variants={BtnVariants} animate="animate">
                          {t("General.ReadMore")}
                        </motion.span>
                      )}
                      {readMore && (
                        <motion.span
                          variants={BtnVariants}
                          initial="initial"
                          animate="animate"
                        >
                          {t("General.ReadLess")}
                        </motion.span>
                      )}
                    </ReadMoreBtn>
                    <Visit360Btn
                      href={`http://www.algeriavirtualtour.com/api/uploads/tours/${destination.visit_360}/index.htm`}
                    >
                      {t("CarousselPage.Visit_360")}
                    </Visit360Btn>
                  </BtnContainer>
                </ContentContainer>
              </LeftWrapper>
            </LeftContainer>
            <RightContainer>
              <RightWrapper>
                <ArrowsContainer>
                  <LeftArrow onClick={goLeft} style={{ cursor: "pointer" }} />
                  <RightArrow onClick={goRight} style={{ cursor: "pointer" }} />
                </ArrowsContainer>
              </RightWrapper>
            </RightContainer>
          </PageContent>
        ) : (
          <LocationCarousselMobile
            catégorieInformations={currentCatégorie}
            wilayaId={destination.id_wilaya}
            destination={destination}
          />
        )}
      </PageContentGlobal>
      <Footer />
    </PageContainerGlobal>
  );
};

export default LocationCarousel;
