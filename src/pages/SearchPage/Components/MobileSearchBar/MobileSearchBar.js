import React, { useState } from "react";
import {
  Container,
  SelectWilayaContainer,
  MapIconeContainer,
} from "./MobileSearchBarElements";
import { ReactComponent as MapIconeMobile } from "./MapIconeMobile.svg";
import { ReactComponent as ArrowMobile } from "./ArrowMobile.svg";
import SelectWilayaPopUp from "../SelectWilayaPopUp/SelectWilayaPopUp";
const MobileSearchBar = ({
  wilayas,
  selectedOption,
  setSelectedOption,
  goToWilaya,
}) => {
  const [show, setShow] = useState(false);
  const hidePopUp = () => {
    setShow(false);
  };
  const showPopUp = () => {
    setShow(true);
  };
  return (
    <Container>
      <SelectWilayaContainer onClick={showPopUp}>
        {selectedOption.translatedName}
        <ArrowMobile />
      </SelectWilayaContainer>
      <MapIconeContainer to="/Map">
        <MapIconeMobile />
      </MapIconeContainer>
      {show && (
        <SelectWilayaPopUp
          hidePopUp={hidePopUp}
          wilayas={wilayas}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          goToWilaya={goToWilaya}
        />
      )}
    </Container>
  );
};

export default MobileSearchBar;
