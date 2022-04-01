import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import axios from "axios";
import {
  HomeContent,
  InfoCarousel,
  InfoCarouselTitle,
  InfoCarouselImg,
  ImgCarousel,
  HomePubContainer,
  HomePub,
  ThumbnailImages,
  ThumbnailImage,
  ThumbnailImageText,
  ThumbnailImageTextH5,
  ThumbnailImageExpanded,
  InfoCarouselExpanded,
  DIscoverMore,
  InfoContainer,
  InfoH2,
  InfoP,
  BtnContainer,
  DiscoverMoreBtn,
  MapContainer,
  ReadMoreBtn,
  ReadMoreSpan,
} from "./HomeElements";
import useWindowSize from "../../hooks/useWindowSize";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
import { useLocalStorage } from "../../hooks/useStorage";
//-----------------Elements imports---------------
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import MobileHome from "./MobileHome/MobileHome";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "./HomeBg.jpg";
import FemmeVr from "./FemmeVr.png";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";

const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
//-----------------Variants animation---------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const isDesktop = useWindowSize();
  const [animated, setAnimated] = useState([]);
  const [wilayas, setWilayas] = useState([]);
  const [translatedWilaya, setTranslatedWilaya] = useState({});
  const [translatedLocation, setTranslatedLocation] = useState({});
  const [banners, setBanners] = useLocalStorage("banners", {});

  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/wilaya/first")
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
  const GrowImage = ({ item }) => {
    if (!animated.includes(item.position)) {
      return (
        <ThumbnailImage
          as={motion.div}
          layoutId={item.position}
          bg={item.pic_cover}
          onClick={() => {
            if (item.position === 1) {
              setAnimated((prev) => [...prev, item.position]);
              setReadMore(false);
            } else if (item.position === animated.length + 1) {
              setAnimated((prev) => [...prev, item.position]);
              setReadMore(false);
            }
          }}
        >
          <ThumbnailImageText>
            <ThumbnailImageTextH5>{item.translatedName}</ThumbnailImageTextH5>
          </ThumbnailImageText>
        </ThumbnailImage>
      );
    } else
      return (
        <ThumbnailImageExpanded
          as={motion.div}
          layoutId={item.position}
          bg={item.pic_cover}
        >
          <InfoCarouselExpanded>
            <InfoContainer>
              <InfoH2>{item.translatedName}</InfoH2>
              <InfoP readMore={readMore}>{item.translatedDescription}</InfoP>
              <BtnContainer>
                <ReadMoreBtn
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {!readMore && (
                    <ReadMoreSpan
                      as={motion.span}
                      variants={BtnVariants}
                      animate="animate"
                    >
                      {t("General.ReadMore")}
                    </ReadMoreSpan>
                  )}
                  {readMore && (
                    <ReadMoreSpan
                      as={motion.span}
                      variants={BtnVariants}
                      initial="initial"
                      animate="animate"
                    >
                      {t("General.ReadLess")}
                    </ReadMoreSpan>
                  )}
                </ReadMoreBtn>
                <DiscoverMoreBtn
                  to={{
                    pathname: `/wilaya/${item.id_wilaya}`,
                    state: { wilaya: item },
                  }}
                >
                  {t("HomePage.DiscoverMore")}
                </DiscoverMoreBtn>
              </BtnContainer>
            </InfoContainer>
          </InfoCarouselExpanded>

          <ImgCarousel></ImgCarousel>
        </ThumbnailImageExpanded>
      );
  };
  return (
    <AnimateSharedLayout>
      <PageContainerGlobal
        key="home"
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Navbar setAnimated={setAnimated} />
        <PageContentGlobal fixed={true}>
          {isDesktop ? (
            <HomeContent currentBg={HomeBg}>
              <SidePopUpBar />
              <MapContainer>
                <DzMap />
              </MapContainer>
              <InfoCarousel>
                <InfoCarouselTitle>{t("HomePage.Title")}</InfoCarouselTitle>
                <InfoCarouselImg src={FemmeVr} />
              </InfoCarousel>
              <ImgCarousel>
                <HomePubContainer>
                  {/* <HomePub src={banners.banner_home1} /> */}
                </HomePubContainer>

                <ThumbnailImages>
                  {wilayas.map((item) => {
                    return <GrowImage item={item} key={item.position} />;
                  })}
                  <DIscoverMore to="/Search">
                    {t("HomePage.DiscoverMore")}...
                  </DIscoverMore>
                </ThumbnailImages>
                <HomePubContainer>
                  {/* <HomePub src={banners.banner_home2} /> */}
                </HomePubContainer>
              </ImgCarousel>
            </HomeContent>
          ) : (
            <MobileHome wilayas={wilayas} />
          )}
        </PageContentGlobal>
        <Footer />
      </PageContainerGlobal>
    </AnimateSharedLayout>
  );
};

export default Home;
