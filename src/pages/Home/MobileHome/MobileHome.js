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
  DiscoverBtn,
} from "./MobileHomeElements";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
import FemmeVr from "../FemmeVr.png";
import { ReadMoreSpanMobile } from "../../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setAnimated } from "../../../features/animation/animatedHomeSlice";
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
const MobileHome = ({ wilayas }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const animated = useSelector((state) => state.animatedHome.value);
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
              dispatch(setAnimated(item.position));
            } else if (item.position === animated.length + 1)
              dispatch(setAnimated(item.position));
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
            <TextExpandedContainer
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore && <TitleExpanded>{item.translatedName}</TitleExpanded>}
              <PExpanded readMore={readMore}>
                {item.translatedDescription}
              </PExpanded>
              {!readMore && (
                <ReadMoreSpanMobile
                  as={motion.span}
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  {t("General.ReadMore")}
                </ReadMoreSpanMobile>
              )}
              {readMore && (
                <ReadMoreSpanMobile
                  as={motion.span}
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  {t("General.ReadLess")}
                </ReadMoreSpanMobile>
              )}
            </TextExpandedContainer>
          </ExpandedBottom>
          <ExpandedBtnContainer>
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
              <MainTitle
                dangerouslySetInnerHTML={{ __html: t("HomePage.Title") }}
              ></MainTitle>
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
