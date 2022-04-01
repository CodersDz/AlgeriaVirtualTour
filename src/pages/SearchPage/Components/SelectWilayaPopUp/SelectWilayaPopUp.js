import React from "react";
import {
  BackDrop,
  Container,
  BtnContainer,
  SearchBtn,
} from "./SelectWilayaPopUpElements";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const SelectWilayaPopUp = ({ wilaya, hidePopUp }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <BackDrop onClick={hidePopUp}>
      <Container>
        <BtnContainer>
          <SearchBtn>{t("SearchPage.Research")}</SearchBtn>
        </BtnContainer>
      </Container>
    </BackDrop>
  );
};

export default SelectWilayaPopUp;
