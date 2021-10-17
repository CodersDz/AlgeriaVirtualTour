import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import {
  CarouselContainer,
  InfoCarousel,
  ImgCarousel,
  HomePub,
  ThumbnailImages,
  ThumbnailImage,
  ThumbnailImageExpanded,
  DecouvrirePlus,
} from "./HomeCarouselElements";
//-----------------Images imports---------------
import Pub1 from "../../assets/Images/Pub1.jpg";
import Pub2 from "../../assets/Images/Pub2.jpg";
//carousel images
import Alger_Mosque from "./Alger_Mosque.jpg";
import Bejaia from "./Bejaia.jpg";
import Ghardaia from "./Ghardaia.jpg";
import Djanet_la_tadrarte from "./Djanet_la_tadrarte.jpeg";
const HomeCarousel = ({ bg, setCurrentBg }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [animated, setAnimated] = useState([]);
  const [items, setItems] = useState([
    {
      id: 1,
      wilayaName: "Alger",
      imgPath: Alger_Mosque,
      wilayaDescription:
        "Lorem ipsum dolor sit amet. Sed similique excepturi et repellat saepe 33 voluptatem natus est dolores minima. In nobis ea voluptatem laborum cum reiciendis animi.",
      wilayaUrl: "https://google.com",
    },
    { id: 2, wilayaName: "Bejaia", imgPath: Bejaia },
    {
      id: 3,
      wilayaName: "Ghardaia",
      imgPath: Ghardaia,
    },
    {
      id: 4,
      wilayaName: "Djanet",
      imgPath: Djanet_la_tadrarte,
    },
  ]);
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
        />
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
        />
      );
    } else return null;
  };
  return (
    <AnimateSharedLayout>
      <CarouselContainer>
        <InfoCarousel>
          <button
            onClick={() => {
              setExpandedId(null);
              setAnimated([]);
            }}
          >
            Clique
          </button>
        </InfoCarousel>
        <ImgCarousel>
          <HomePub src={Pub1} />
          <ThumbnailImages>
            {items.map((item) => {
              return <GrowImage item={item} />;
            })}
            <DecouvrirePlus to="/">Découvrir plus...</DecouvrirePlus>
          </ThumbnailImages>
          <HomePub src={Pub2} />
        </ImgCarousel>
      </CarouselContainer>
    </AnimateSharedLayout>
  );
};

export default HomeCarousel;
