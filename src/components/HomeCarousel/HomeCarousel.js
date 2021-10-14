import React from "react";
import {
  CarouselContainer,
  InfoCarousel,
  ImgCarousel,
  HomePub,
  ThumbnailImages,
  ThumbnailImage,
} from "./HomeCarouselElements";
//-----------------Images imports---------------
import Pub1 from "../../assets/Images/Pub1.jpg";
import Pub2 from "../../assets/Images/Pub2.jpg";
//carousel images
import Alger_Mosque from "../../assets/Images/Alger_Mosque.jpg";
import Bejaia from "../../assets/Images/Bejaia.jpg";
import Ghardaia from "../../assets/Images/Ghardaia.jpg";
import Djanet_la_tadrarte from "../../assets/Images/Djanet_la_tadrarte.jpeg";
const HomeCarousel = ({ setCurrentBg }) => {
  const updateBg = (e) => {
    console.log(e.target.getAttribute("src"));
    setCurrentBg(e.target.getAttribute("src"));
  };
  return (
    <CarouselContainer>
      <InfoCarousel></InfoCarousel>
      <ImgCarousel>
        <HomePub src={Pub1} />
        <ThumbnailImages>
          <ThumbnailImage
            src={Alger_Mosque}
            onClick={(e) => {
              setCurrentBg(Alger_Mosque);
            }}
          />
          <ThumbnailImage
            src={Bejaia}
            onClick={(e) => {
              setCurrentBg(Bejaia);
            }}
          />
          <ThumbnailImage src={Ghardaia} />
          <ThumbnailImage src={Djanet_la_tadrarte} />
        </ThumbnailImages>
        <HomePub src={Pub2} />
      </ImgCarousel>
    </CarouselContainer>
  );
};

export default HomeCarousel;
