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
  MapContainer,
} from "./HomeElements";
import useWindowSize from "../../hooks/useWindowSize";
import { PageContentGlobal } from "../../GlobalStyles";
//-----------------Elements imports---------------
//-----------------Components imports---------------
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import MobileHome from "./MobileHome/MobileHome";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import FemmeVr from "./FemmeVr.png";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import getWilayaInformation from "../../assets/utilities/getWilayaInformation";

import { generalAPILink } from "../../assets/Variables/Links";
import CarousselContainerD from "./Components/CarousselContainerD";

//-----------------Variants animation---------------
export const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
const Home = () => {
  const isDesktop = useWindowSize();
  const { t } = useTranslation();
  const [wilayas, setWilayas] = useState([]);

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

  return (
    <AnimateSharedLayout>
      <PageContentGlobal
        fixed={true}
        key="home"
        as={motion.div}
        variants={BtnVariants}
        initial="initial"
        animate="animate"
      >
        {isDesktop ? (
          <HomeContent>
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
              <CarousselContainerD wilayas={wilayas} />
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
