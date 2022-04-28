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
  CloseButton,
} from "./SelectWilayaPopUpElements";
import {
  SelectWilayaContainer,
  SelectWilayaVisible,
  WilayaSelectedH3,
  SelectWilayaUlHidden,
  SelectWilayaLIHidden,
} from "./SelectWilayaPopUpElements";
import { ReactComponent as ArrowSvg } from "../../../../assets/svg/arrow.svg";

import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const SelectWilayaPopUp = ({
  hidePopUp,
  wilayas,
  selectedOption,
  setSelectedOption,
  goToWilaya,
}) => {
  const { t } = useTranslation();
  const [showWilayas, setShowWilayas] = useState(false);
  return (
    <BackDrop>
      <Container>
        <Wrapper>
          <CloseButton onClick={hidePopUp}>x</CloseButton>

          <SelectWilayaContainer
            onClick={() => {
              setShowWilayas(!showWilayas);
            }}
          >
            <WilayaTextContainer>
              <WilayaText>{t("SearchPage.Wilaya")}</WilayaText>
            </WilayaTextContainer>
            <SelectWilayaVisible showWilayas={showWilayas}>
              <WilayaSelectedH3>
                {selectedOption.translatedName}
              </WilayaSelectedH3>
              <ArrowSvg />
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
