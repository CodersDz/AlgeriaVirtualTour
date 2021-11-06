import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import axios from "axios";
import {
  HomeContainer,
  HomeContent,
  CarouselContainer,
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
} from "./HomeElements";

import { ReadMoreBtn } from "../../GlobalStyles";
import { useLocalStorage } from "../../hooks/useStorage";
//-----------------Elements imports---------------
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "./HomeBg.jpg";
//carousel images
import Alger_Mosque from "./Alger_Mosque.jpg";
import Bejaia from "./Bejaia.jpg";
import Ghardaia from "./Ghardaia.jpg";
import Djanet_la_tadrarte from "./Djanet_la_tadrarte.jpeg";

const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
//-----------------Variants animation---------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const items = [
  {
    id: 1,
    wilayaName: "Alger",
    imgPath: Alger_Mosque,
    wilayaDescription:
      "Alger est la capitale de l'Algérie. Elle se trouve sur la côte méditerranéenne du pays. Elle est connue pour les bâtiments blanchis à la chaux de la Casbah…Alger est une ville cosmopolite et plurilingue, la ville a connu un accroissement démographique exponentiel dû à des vagues de migration provenant des villes  du pays et à l’exode rural, qui s'est traduit sur le plan sociolinguistique par un brassage d’Algériens venus de toutes les régions du pays, avec leurs parlers respectifs. En outre, le parler des jeunes se caractérise par une innovation linguistique et une créativité lexicale.",

    wilayaUrl: "https://google.com",
  },
  {
    id: 2,
    wilayaName: "Béjaïa",
    imgPath: Bejaia,
    wilayaDescription:
      "Alger est la capitale de l'Algérie. Elle se trouve sur la côte méditerranéenne du pays. Elle est connue pour les bâtiments blanchis à la chaux de la Casbah…Alger est une ville cosmopolite et plurilingue, la ville a connu un accroissement démographique exponentiel dû à des vagues de migration provenant des villes  du pays et à l’exode rural, qui s'est traduit sur le plan sociolinguistique par un brassage d’Algériens venus de toutes les régions du pays, avec leurs parlers respectifs. En outre, le parler des jeunes se caractérise par une innovation linguistique et une créativité lexicale.",
    wilayaUrl: "https://google.com",
  },
  {
    id: 3,
    wilayaName: "Ghardaïa",
    imgPath: Ghardaia,
    wilayaDescription:
      "Alger est la capitale de l'Algérie. Elle se trouve sur la côte méditerranéenne du pays. Elle est connue pour les bâtiments blanchis à la chaux de la Casbah…Alger est une ville cosmopolite et plurilingue, la ville a connu un accroissement démographique exponentiel dû à des vagues de migration provenant des villes  du pays et à l’exode rural, qui s'est traduit sur le plan sociolinguistique par un brassage d’Algériens venus de toutes les régions du pays, avec leurs parlers respectifs. En outre, le parler des jeunes se caractérise par une innovation linguistique et une créativité lexicale.",
    wilayaUrl: "https://google.com",
  },
  {
    id: 4,
    wilayaName: "Djanet",
    imgPath: Djanet_la_tadrarte,
    wilayaDescription:
      "Alger est la capitale de l'Algérie. Elle se trouve sur la côte méditerranéenne du pays. Elle est connue pour les bâtiments blanchis à la chaux de la Casbah…Alger est une ville cosmopolite et plurilingue, la ville a connu un accroissement démographique exponentiel dû à des vagues de migration provenant des villes  du pays et à l’exode rural, qui s'est traduit sur le plan sociolinguistique par un brassage d’Algériens venus de toutes les régions du pays, avec leurs parlers respectifs. En outre, le parler des jeunes se caractérise par une innovation linguistique et une créativité lexicale.",
  },
];
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
          console.log("updateBanners");
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
    if (!animated.includes(item.id)) {
      return (
        <ThumbnailImage
          as={motion.div}
          layoutId={item.id}
          bg={item.imgPath}
          onClick={() => {
            if (item.id === 1) {
              setAnimated((prev) => [...prev, item.id]);
            } else if (item.id === animated.length + 1)
              setAnimated((prev) => [...prev, item.id]);
          }}
        >
          <ThumbnailImageText>
            <ThumbnailImageTextH5>{item.wilayaName}</ThumbnailImageTextH5>
          </ThumbnailImageText>
        </ThumbnailImage>
      );
    } else
      return (
        <ThumbnailImageExpanded
          as={motion.div}
          layoutId={item.id}
          bg={item.imgPath}
        >
          <InfoCarouselExpanded>
            <InfoContainer>
              <InfoContent>
                <InfoH2>{item.wilayaName}</InfoH2>
                <InfoP>{item.wilayaDescription}</InfoP>
                {readMore && (
                  <InfoP as={motion.p}>
                    Alger est une ville cosmopolite et plurilingue, la ville a
                    connu un accroissement démographique exponentiel dû à des
                    vagues de migration provenant des villes du pays et à
                    l’exode rural, qui s'est traduit sur le plan
                    sociolinguistique par un brassage d’Algériens venus de
                    toutes les régions du pays, avec leurs parlers respectifs.
                    En outre, le parler des jeunes se caractérise par une
                    innovation linguistique et une créativité lexicale
                  </InfoP>
                )}
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
                      pathname: `/${item.wilayaName}`,
                      state: { wilayaName: item.wilayaName },
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
          <CarouselContainer>
            <InfoCarousel />
            <ImgCarousel>
              <HomePub src={banners.banner_home1} />
              <ThumbnailImages>
                {items.map((item) => {
                  return <GrowImage item={item} key={item.id} />;
                })}
                <DecouvrirePlus to="/Search">Découvrir plus...</DecouvrirePlus>
              </ThumbnailImages>
              <HomePub src={banners.banner_home2} />
            </ImgCarousel>
          </CarouselContainer>
        </HomeContent>
      </HomeContainer>
    </AnimateSharedLayout>
  );
};

export default Home;
