import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  ThumbnailImages,
  ThumbnailImage,
  ThumbnailImageText,
  ThumbnailImageTextH5,
  ThumbnailImageExpanded,
  DIscoverMore,
  InfoContainer,
  InfoH2,
  InfoP,
  BtnContainer,
  DiscoverMoreBtn,
} from "./CarousselContainerDElements";
import { InfoCarouselExpanded } from "../HomeElements";

import { ImgCarousel } from "../HomeElements";
import { ReadMoreSpan } from "../../../GlobalStyles";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
import { setAnimated } from "../../../features/animation/animatedHomeSlice";
import { BtnVariants } from "../Home";
const CarousselContainerD = ({ wilayas }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);
  const animated = useSelector((state) => state.animatedHome.value);
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
    }
    //
    else {
      return (
        <ThumbnailImageExpanded
          as={motion.div}
          layoutId={item.position}
          bg={item.pic_cover}
        >
          {item.position > animated.length - 2 && (
            <>
              <InfoCarouselExpanded>
                <InfoContainer>
                  <InfoH2>{item.translatedName}</InfoH2>
                  <InfoP readMore={readMore}>
                    {item.translatedDescription}
                  </InfoP>
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
            </>
          )}
        </ThumbnailImageExpanded>
      );
    }
  };
  return (
    <ThumbnailImages>
      {wilayas.map((item) => {
        return <GrowImage item={item} key={item.position} />;
      })}
      <DIscoverMore to="/Search">{t("HomePage.DiscoverMore")}...</DIscoverMore>
    </ThumbnailImages>
  );
};

export default CarousselContainerD;
