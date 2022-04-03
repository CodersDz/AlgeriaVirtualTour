import React from "react";
import {
  BackDrop,
  Container,
  Wrapper,
  WilayaTextContainer,
  WilayaText,
  BtnContainer,
  SearchBtn,
} from "./SelectWilayaPopUpElements";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const SelectWilayaPopUp = ({
  hidePopUp,
  wilayas,
  selectedOption,
  setSelectedOption,
  goToWilaya,
}) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <BackDrop onClick={hidePopUp}>
      <Container>
        <Wrapper>
          <WilayaTextContainer>
            <WilayaText>{t("SearchPage.Wilaya")}</WilayaText>
          </WilayaTextContainer>

          <BtnContainer>
            <SearchBtn>{t("SearchPage.Research")}</SearchBtn>
          </BtnContainer>
        </Wrapper>
      </Container>
    </BackDrop>
  );
};

export default SelectWilayaPopUp;
