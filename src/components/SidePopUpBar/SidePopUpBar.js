import React from "react";
import {
  SidePopUpBarContainer,
  CalendarContainer,
  BlueGlobeContainer,
  VisibleContainer1,
  HiddenContainer1,
  VisibleContainer2,
  HiddenContainer2,
  AIcone,
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
          <AIcone
            href="https://youtube.com/channel/UCpu5hxyNQq0bl8A0-b-zpJw"
            target="_blank"
          >
            <YoutubeIcone style={{ transform: "scale(0.7)" }} />
          </AIcone>
          <AIcone
            href="https://www.instagram.com/algeria_virtual_tour"
            target="_blank"
          >
            <InstagramIcone style={{ transform: "scale(0.7)" }} />
          </AIcone>
          <AIcone
            href="https://www.facebook.com/Algeria.Travel.Guide"
            target="_blank"
          >
            <FacebookIcone style={{ transform: "scale(0.7)" }} />
          </AIcone>
          <AIcone
            href="https://www.linkedin.com/in/algeria-virtualtour"
            target="_blank"
          >
            <TwitterIcone style={{ transform: "scale(0.7)" }} />
          </AIcone>
        </HiddenContainer2>
      </BlueGlobeContainer>
    </SidePopUpBarContainer>
  );
};

export default SidePopUpBar;
