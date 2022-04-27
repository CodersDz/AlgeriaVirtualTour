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
} from "./HomeElements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";
import { PageContentGlobal, ReadMoreSpan } from "../../GlobalStyles";
import { useLocalStorage } from "../../hooks/useStorage";
//-----------------Elements imports---------------
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import MobileHome from "./MobileHome/MobileHome";
import { setAnimated } from "../../features/animation/animatedHomeSlice";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "./HomeBg.jpg";
import FemmeVr from "./FemmeVr.png";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";

import { generalAPILink } from "../../assets/Variables/Links";
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
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const isDesktop = useWindowSize();
  const animated = useSelector((state) => state.animatedHome.value);
  const [wilayas, setWilayas] = useState([]);
  const [translatedWilaya, setTranslatedWilaya] = useState({});
  const [translatedLocation, setTranslatedLocation] = useState({});
  const [banners, setBanners] = useLocalStorage("banners", {});

  useEffect(() => {
    axios
      .get(`${generalAPILink}/wilaya/first`)
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
  const GrowImage = ({ item }) => {
    if (!animated.includes(item.position)) {
      return (
        <ThumbnailImage
          as={motion.div}
          layoutId={item.position}
          bg={item.pic_cover}
          onClick={() => {
            if (item.position === 1) {
              dispatch(setAnimated(item.position));
              setReadMore(false);
            } else if (item.position === animated.length + 1) {
              dispatch(setAnimated(item.position));
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
              {!readMore && (
                <ReadMoreSpan
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                  as={motion.span}
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  {t("General.ReadMore")}
                </ReadMoreSpan>
              )}
              {readMore && (
                <ReadMoreSpan
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                  as={motion.span}
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  {t("General.ReadLess")}
                </ReadMoreSpan>
              )}
              <BtnContainer>
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
      <PageContentGlobal
        fixed={true}
        key="home"
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {isDesktop ? (
          <HomeContent currentBg={HomeBg}>
            <SidePopUpBar />
            <MapContainer>
              <DzMap />
            </MapContainer>
            <InfoCarousel>
              <InfoCarouselTitle
                dangerouslySetInnerHTML={{ __html: t("HomePage.Title") }}
              ></InfoCarouselTitle>
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
    </AnimateSharedLayout>
  );
};

export default Home;
