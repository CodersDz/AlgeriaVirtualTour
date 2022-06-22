import React, { useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
import { ReactComponent as MapIcone } from "../../MapIcone.svg";

import {
  Container,
  MapIconeContainer,
  SelectWilayaContainer,
  SearchBtn,
  SelectWilayaVisible,
  WilayaSelectedH3,
  SelectWilayaUlHidden,
  Arrow,
  SelectWilayaLIHidden,
} from "./DesktopSearchBarElements";
const DesktopSearchBar = ({
  wilayas,
  selectedOption,
  setSelectedOption,
  goToWilaya,
}) => {
  const { t } = useTranslation();
  const [showWilayas, setShowWilayas] = useState(false);

  return (
    <Container>
      <SelectWilayaContainer
        onMouseLeave={() => {
          setShowWilayas(false);
        }}
      >
        <SelectWilayaVisible
          showWilayas={showWilayas}
          onMouseEnter={() => {
            setShowWilayas(true);
          }}
        >
          <WilayaSelectedH3>{selectedOption.translatedName}</WilayaSelectedH3>
          <Arrow />
        </SelectWilayaVisible>
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
      </SelectWilayaContainer>
      <SearchBtn
        onClick={() => {
          goToWilaya(selectedOption.id_wilaya);
        }}
      >
        {t("SearchPage.Research")}
      </SearchBtn>
      <MapIconeContainer to="/Map">
        <MapIcone />
      </MapIconeContainer>
    </Container>
  );
};

export default DesktopSearchBar;
