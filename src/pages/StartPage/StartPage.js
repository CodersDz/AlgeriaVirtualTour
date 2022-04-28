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
import MapStartPage from "../../assets/Images/MapStartPage.png";

//-----------------Variants animation---------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const StartPage = () => {
  const { t } = useTranslation();
  return (
    <StartPageContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <StartPageContent>
        <StartPageImg src={StartPageLogo} />
        <EmptyDiv></EmptyDiv>
        <StartPageLink to="/home">{t("StartPage.Begin")}</StartPageLink>
      </StartPageContent>
      <AlgeriaMap src={MapStartPage}></AlgeriaMap>
    </StartPageContainer>
  );
};

export default StartPage;
