import React from "react";
import { MobileBottomNavContainer } from "./MobileBottomNavElements";
import { ReactComponent as CalendarIcone } from "./Svg/CalendarIcone.svg";
import { ReactComponent as HomeIcone } from "./Svg/HomeIcone.svg";
import { ReactComponent as TravelIcone } from "./Svg/TravelIcone.svg";
import { ReactComponent as SearchIcone } from "./Svg/SearchIcone.svg";
import { ReactComponent as VrIcone } from "./Svg/VrIcone.svg";
const MobileBottomNav = () => {
  return (
    <MobileBottomNavContainer>
      <CalendarIcone />
      <HomeIcone />
      <TravelIcone />
      <SearchIcone />
      <VrIcone />
    </MobileBottomNavContainer>
  );
};

export default MobileBottomNav;
