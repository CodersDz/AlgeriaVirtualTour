//-----------------React and hooks imports---------------
import React from "react";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { motion } from "framer-motion";
//-----------------Elements imports---------------
import {
  StartPageContainer,
  StartPageLink,
  StartPageImg,
} from "./StartPageElements";

//-----------------Logo import---------------
import StartPageLogo from "../../assets/Images/StartPageLogo.png";

//-----------------Variants animation---------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const StartPage = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <StartPageContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <StartPageImg src={StartPageLogo} />
      <StartPageLink to="/home">{t("StartPage.Begin")}</StartPageLink>
    </StartPageContainer>
  );
};

export default StartPage;
