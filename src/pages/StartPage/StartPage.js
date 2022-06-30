//-----------------React and hooks imports---------------
import React from "react";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { motion } from "framer-motion";
//-----------------Elements imports---------------
import {
  StartPageContainer,
  StartPageLink,
  StartPageImg,
  StartPageContent,
  EmptyDiv,
  AlgeriaMap,
} from "./StartPageElements";

//-----------------Logo import---------------
import StartPageLogo from "../../assets/svg/StartPageLogo.svg";
import StartPageLogoMobile from "../../assets/svg/StartPageLogoMobile.svg";
import MapStartPage from "../../assets/Images/MapStartPage.png";
import useWindowSize from "../../hooks/useWindowSize";

//-----------------Variants animation---------------

const StartPage = () => {
  const { t } = useTranslation();
  const isDesktop = useWindowSize();
  return (
    <StartPageContainer>
      <StartPageContent>
        {isDesktop ? (
          <StartPageImg src={StartPageLogo} />
        ) : (
          <StartPageImg src={StartPageLogoMobile} />
        )}

        <EmptyDiv></EmptyDiv>
        <StartPageLink to="/home">{t("StartPage.Begin")}</StartPageLink>
      </StartPageContent>
      <AlgeriaMap src={MapStartPage}></AlgeriaMap>
    </StartPageContainer>
  );
};

export default StartPage;
