import React from "react";
import {
  SidePopUpBarContainer,
  CalendarContainer,
  BlueGlobeContainer,
  VisibleContainer1,
  HiddenContainer1,
  VisibleContainer2,
  HiddenContainer2,
} from "./SidePopUpBarElements";
import { ReactComponent as BlueGlobeIcone } from "./Svg/BlueGlobeIcone.svg";
import { ReactComponent as CalendarIcone } from "./Svg/CalendarIcone.svg";
import { ReactComponent as FacebookIcone } from "./Svg/FacebookIcone.svg";
import { ReactComponent as TwitterIcone } from "./Svg/TwitterIcone.svg";
import { ReactComponent as InstagramIcone } from "./Svg/InstagramIcone.svg";
import { ReactComponent as YoutubeIcone } from "./Svg/YoutubeIcone.svg";
const SidePopUpBar = () => {
  return (
    <SidePopUpBarContainer>
      <CalendarContainer>
        <VisibleContainer1>
          <CalendarIcone />
        </VisibleContainer1>
        <HiddenContainer1></HiddenContainer1>
      </CalendarContainer>
      <BlueGlobeContainer>
        <VisibleContainer2>
          <BlueGlobeIcone />
        </VisibleContainer2>
        <HiddenContainer2>
          <YoutubeIcone />
          <InstagramIcone />
          <FacebookIcone />
          <TwitterIcone />
        </HiddenContainer2>
      </BlueGlobeContainer>
    </SidePopUpBarContainer>
  );
};

export default SidePopUpBar;
