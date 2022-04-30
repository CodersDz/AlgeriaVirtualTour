import React from "react";
import {
  Container,
  Wrapper,
  MainTopContainer,
  TopLeftContainer,
  MainBottomContainer,
  MainTitleContainer,
  MainTitle,
  MainImage,
} from "./MobileHomeElements";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
import FemmeVr from "../FemmeVr.png";
import { useSelector } from "react-redux";
import CarousselContainer from "./Components/CarousselContainer";

const MobileHome = ({ wilayas }) => {
  const { t } = useTranslation();
  const animated = useSelector((state) => state.animatedHome.value);

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
          <CarousselContainer wilayas={wilayas} />
        </MainTopContainer>
        <MainBottomContainer>
          {animated.length === 0 && <MainImage src={FemmeVr}></MainImage>}
        </MainBottomContainer>
      </Wrapper>
    </Container>
  );
};

export default MobileHome;
