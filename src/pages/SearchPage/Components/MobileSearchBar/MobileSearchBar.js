import React, { useState } from "react";
import {
  Container,
  SelectWilayaContainer,
  MapIconeContainer,
} from "./MobileSearchBarElements";
import { ReactComponent as MapIconeMobile } from "./MapIconeMobile.svg";
import { ReactComponent as ArrowMobile } from "./ArrowMobile.svg";
import SelectWilayaPopUp from "../SelectWilayaPopUp/SelectWilayaPopUp";
const MobileSearchBar = () => {
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
        Alger
        <ArrowMobile />
      </SelectWilayaContainer>
      <MapIconeContainer to="/Map">
        <MapIconeMobile />
      </MapIconeContainer>
      {show && <SelectWilayaPopUp hidePopUp={hidePopUp} />}
    </Container>
  );
};

export default MobileSearchBar;
