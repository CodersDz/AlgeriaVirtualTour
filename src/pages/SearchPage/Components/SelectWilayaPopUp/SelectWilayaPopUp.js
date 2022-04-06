import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BackDrop,
  Container,
  Wrapper,
  WilayaTextContainer,
  WilayaText,
  BtnContainer,
  SearchBtn,
} from "./SelectWilayaPopUpElements";
import {
  SelectWilayaContainer,
  SelectWilayaVisible,
  WilayaSelectedH3,
  SelectWilayaUlHidden,
  SelectWilayaLIHidden,
  Arrow,
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
  const [showWilayas, setShowWilayas] = useState(false);
  return (
    <BackDrop onClick={hidePopUp}>
      <Container>
        <Wrapper>
          <WilayaTextContainer>
            <WilayaText>{t("SearchPage.Wilaya")}</WilayaText>
          </WilayaTextContainer>
          <SelectWilayaContainer
            onClick={() => {
              setShowWilayas(!showWilayas);
            }}
          >
            <SelectWilayaVisible>
              <WilayaSelectedH3>
                {selectedOption.translatedName}
              </WilayaSelectedH3>
              <Arrow />
            </SelectWilayaVisible>

            {showWilayas && (
              <SelectWilayaUlHidden as={motion.div} showWilayas={showWilayas}>
                {wilayas.map((wilaya) => {
                  return (
                    <SelectWilayaLIHidden
                      onClick={() => {
                        setSelectedOption(wilaya);
                        setShowWilayas(false);
                      }}
                    >
                      {wilaya.translatedName}
                    </SelectWilayaLIHidden>
                  );
                })}
              </SelectWilayaUlHidden>
            )}
          </SelectWilayaContainer>
          <BtnContainer
            onClick={() => {
              goToWilaya(selectedOption.id_wilaya);
            }}
          >
            <SearchBtn>{t("SearchPage.Research")}</SearchBtn>
          </BtnContainer>
        </Wrapper>
      </Container>
    </BackDrop>
  );
};

export default SelectWilayaPopUp;
