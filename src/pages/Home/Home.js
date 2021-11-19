import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import axios from "axios";
import {
  HomeContainer,
  HomeContent,
  InfoCarousel,
  ImgCarousel,
  HomePub,
  ThumbnailImages,
  ThumbnailImage,
  ThumbnailImageText,
  ThumbnailImageTextH5,
  ThumbnailImageExpanded,
  InfoCarouselExpanded,
  DecouvrirePlus,
  InfoContainer,
  InfoContent,
  InfoH2,
  InfoP,
  BtnContainer,
  DiscoverMoreBtn,
  MapContainer,
} from "./HomeElements";

import { ReadMoreBtn } from "../../GlobalStyles";
import { useLocalStorage } from "../../hooks/useStorage";
//-----------------Elements imports---------------
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "./HomeBg.jpg";

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
  const [animated, setAnimated] = useState([]);
  const [wilayas, setWilayas] = useLocalStorage("wilayas", []);
  const [banners, setBanners] = useLocalStorage("banners", {});
  useEffect(() => {
    console.log(wilayas);
    if (wilayas.length === 0) {
      axios
        .get("http://www.algeriavirtualtour.com/api/wilaya")
        .then((response) => {
          console.log(response.data.data);
          setWilayas(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  useEffect(() => {
    if (Object.entries(banners).length === 0)
      axios
        .get("http://www.algeriavirtualtour.com/api/banners/0")
        .then((response) => {
          console.log("updateWilayas");
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
            } else if (item.position === animated.length + 1)
              setAnimated((prev) => [...prev, item.position]);
          }}
        >
          <ThumbnailImageText>
            <ThumbnailImageTextH5>{item.name}</ThumbnailImageTextH5>
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
              <InfoContent>
                <InfoH2>{item.name}</InfoH2>
                <InfoP readMore={readMore}>{item.description}</InfoP>

                <BtnContainer>
                  <ReadMoreBtn
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    {!readMore && (
                      <motion.span variants={BtnVariants} animate="animate">
                        Lire la suite
                      </motion.span>
                    )}
                    {readMore && (
                      <motion.span
                        variants={BtnVariants}
                        initial="initial"
                        animate="animate"
                      >
                        Moins
                      </motion.span>
                    )}
                  </ReadMoreBtn>
                  <DiscoverMoreBtn
                    to={{
                      pathname: `/wilaya/${item.name}`,
                      state: { wilayaName: item.name, wilaya: item },
                    }}
                  >
                    Découvrir Plus
                  </DiscoverMoreBtn>
                </BtnContainer>
              </InfoContent>
            </InfoContainer>
          </InfoCarouselExpanded>

          <ImgCarousel></ImgCarousel>
        </ThumbnailImageExpanded>
      );
  };
  return (
    <AnimateSharedLayout>
      <HomeContainer
        key="home"
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        currentBg={HomeBg}
      >
        <Navbar setAnimated={setAnimated} />
        <HomeContent>
          <MapContainer>
            <DzMap />
          </MapContainer>
          <InfoCarousel />
          <ImgCarousel>
            <HomePub src={banners.banner_home1} />
            <ThumbnailImages>
              {wilayas.map((item) => {
                return <GrowImage item={item} key={item.position} />;
              })}
              <DecouvrirePlus to="/Search">Découvrir plus...</DecouvrirePlus>
            </ThumbnailImages>
            <HomePub src={banners.banner_home2} />
          </ImgCarousel>
        </HomeContent>
      </HomeContainer>
    </AnimateSharedLayout>
  );
};

export default Home;
