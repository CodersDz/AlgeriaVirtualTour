//-----------------React and hooks imports---------------
import React, { useState, useEffect } from "react";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { motion } from "framer-motion";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useStorage";
//-----------------Elements imports---------------
import {
  StartPageContainer,
  StartPageLink,
  StartPageImg,
  StartPageContent,
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
  const [wilayas, setWilayas] = useLocalStorage("wilayas", []);
  const [banners, setBanners] = useLocalStorage("banners", {});
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/banners/0")
      .then((response) => {
        setBanners(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/wilaya")
      .then((response) => {
        setWilayas(JSON.stringify(response.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
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
        <StartPageLink to="/home">{t("StartPage.Begin")}</StartPageLink>
      </StartPageContent>
    </StartPageContainer>
  );
};

export default StartPage;
