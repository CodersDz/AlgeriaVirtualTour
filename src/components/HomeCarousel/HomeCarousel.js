import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import {
  CarouselContainer,
  InfoCarousel,
  ImgCarousel,
  HomePub,
  ThumbnailImages,
  ThumbnailImage,
  ThumbnailImageExpanded,
  InfoCarouselExpanded,
  DecouvrirePlus,
  InfoContainer,
  InfoContent,
  InfoH2,
  InfoP,
  BtnContainer,
  ReadMoreBtn,
  DiscoverMoreBtn,
} from "./HomeCarouselElements";
//-----------------Images imports---------------
import Pub1 from "../../assets/Images/Pub1.jpg";
import Pub2 from "../../assets/Images/Pub2.jpg";
//carousel images
import Alger_Mosque from "./Alger_Mosque.jpg";
import Bejaia from "./Bejaia.jpg";
import Ghardaia from "./Ghardaia.jpg";
import Djanet_la_tadrarte from "./Djanet_la_tadrarte.jpeg";
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
    wilayaName: "Bejaia",
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
const HomeCarousel = ({ bg, setCurrentBg }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [animated, setAnimated] = useState([]);
  const [currentInfo, setCurrentInfo] = useState({
    id: null,
    wilayaName: "",
    imgPath: "",
  });
  useEffect(() => {
    console.log(expandedId);
    if (expandedId !== null) {
      items.map((item) => {
        if (item.id === expandedId) {
          setCurrentInfo(item);
        }
      });
    }
    console.log(currentInfo);
  }, [expandedId]);

  const GrowImage = ({ item }) => {
    //ici
    if (item.id === expandedId) {
      setTimeout(() => {
        setCurrentBg(item.imgPath);
      }, 500);

      return (
        <ThumbnailImageExpanded
          as={motion.div}
          layoutId={item.id}
          bg={item.imgPath}
        >
          <InfoCarouselExpanded>
            <InfoContainer>
              <InfoContent>
                <InfoH2>{currentInfo.wilayaName}</InfoH2>
                <InfoP>{currentInfo.wilayaDescription}</InfoP>
                <BtnContainer>
                  <ReadMoreBtn>Lire la suite</ReadMoreBtn>
                  <DiscoverMoreBtn
                    to={{
                      pathname: `/${currentInfo.wilayaName}`,
                      state: { wilayaName: currentInfo.wilayaName },
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
    } else if (!animated.includes(item.id)) {
      return (
        <ThumbnailImage
          as={motion.div}
          layoutId={item.id}
          bg={item.imgPath}
          onClick={() => {
            setAnimated((prev) => [...prev, item.id]);
            setExpandedId(item.id);
          }}
        >
          {item.wilayaName}
        </ThumbnailImage>
      );
    } else return null;
  };
  return (
    <AnimateSharedLayout>
      <CarouselContainer>
        <InfoCarousel></InfoCarousel>

        <ImgCarousel>
          <HomePub src={Pub1} />
          <ThumbnailImages>
            {items.map((item) => {
              return <GrowImage item={item} />;
            })}
            <DecouvrirePlus to="/Search">Découvrir plus...</DecouvrirePlus>
          </ThumbnailImages>
          <HomePub src={Pub2} />
        </ImgCarousel>
      </CarouselContainer>
    </AnimateSharedLayout>
  );
};

export default HomeCarousel;
