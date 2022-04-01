import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Wrapper,
  MainTopContainer,
  TopLeftContainer,
  TopRightContainer,
  ThumbnailImage,
  ExpandedContainer,
  ExpandedBottom,
  ExpandedTop,
  ThumbnailImageText,
  ThumbnailImageTextH5,
  TextExpandedContainer,
  TitleExpanded,
  PExpanded,
  MainBottomContainer,
  TitleExpandedContainer,
  ExpandedTopLeftContainer,
  ExpandedTopRightContainer,
  MainTitleContainer,
  MainTitle,
  MainImage,
  DiscoverMoreContainer,
  DiscoverMoreLink,
  ExpandedBtnContainer,
  ReadMoreBtn,
  ReadMoreSpan,
  DiscoverBtn,
} from "./MobileHomeElements";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
import FemmeVr from "../FemmeVr.png";
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
const MobileHome = ({ wilayas }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [animated, setAnimated] = useState([]);
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    console.log(animated);
  });
  const GrowImage = ({ item }) => {
    if (!animated.includes(item.position)) {
      return (
        <ThumbnailImage
          as={motion.div}
          layoutId={item.position}
          bg={item.pic_cover}
          readMore={readMore}
          onClick={() => {
            if (item.position === 1) {
              setAnimated((prev) => [...prev, item.position]);
            } else if (item.position === animated.length + 1)
              setAnimated((prev) => [...prev, item.position]);
          }}
        >
          <ThumbnailImageText>
            <ThumbnailImageTextH5 layoutId={"wilayaName"}>
              {item.translatedName}
            </ThumbnailImageTextH5>
          </ThumbnailImageText>
        </ThumbnailImage>
      );
    } else
      return (
        <ExpandedContainer
          as={motion.div}
          layoutId={item.position}
          bg={item.pic_cover}
        >
          <ExpandedTop readMore={readMore}>
            <ExpandedTopLeftContainer>
              <TitleExpandedContainer>
                <TitleExpanded>{item.translatedName}</TitleExpanded>
              </TitleExpandedContainer>
            </ExpandedTopLeftContainer>
            <ExpandedTopRightContainer></ExpandedTopRightContainer>
          </ExpandedTop>
          <ExpandedBottom readMore={readMore}>
            <TextExpandedContainer>
              {readMore && <TitleExpanded>{item.translatedName}</TitleExpanded>}
              <PExpanded readMore={readMore}>
                {item.translatedDescription}
              </PExpanded>
            </TextExpandedContainer>
          </ExpandedBottom>
          <ExpandedBtnContainer>
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
            <DiscoverBtn
              to={{
                pathname: `/wilaya/${item.id_wilaya}`,
                state: { wilaya: item },
              }}
            >
              {t("HomePage.SeeMore")}...
            </DiscoverBtn>
          </ExpandedBtnContainer>
        </ExpandedContainer>
      );
  };
  return (
    <Container>
      <Wrapper>
        <MainTopContainer>
          <TopLeftContainer>
            <MainTitleContainer>
              <MainTitle>{t("HomePage.Title")}</MainTitle>
            </MainTitleContainer>
          </TopLeftContainer>
          <TopRightContainer>
            {wilayas.map((item) => {
              return <GrowImage item={item} key={item.position} />;
            })}
            <DiscoverMoreContainer readMore={readMore}>
              <DiscoverMoreLink to="/search">
                {t("HomePage.DiscoverMore")}...
              </DiscoverMoreLink>
            </DiscoverMoreContainer>
          </TopRightContainer>
        </MainTopContainer>
        <MainBottomContainer>
          {animated.length === 0 && <MainImage src={FemmeVr}></MainImage>}
        </MainBottomContainer>
      </Wrapper>
    </Container>
  );
};

export default MobileHome;
