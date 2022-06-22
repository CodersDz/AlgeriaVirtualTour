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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const StartPage = () => {
  const { t } = useTranslation();
  const isDesktop = useWindowSize();
  return (
    <StartPageContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
