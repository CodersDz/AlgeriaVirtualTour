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
  EmptyDiv,
  AlgeriaMap,
  SpanDetail,
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
  const [wilayas, setWilayas] = useLocalStorage("wilayas", []);
  const [banners, setBanners] = useLocalStorage("banners", {});
  const [showDetail, setShowDetail] = useState(false);
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
        setWilayas(response.data.data);
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
        <EmptyDiv>
          {showDetail && (
            <SpanDetail
              as={motion.span}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              Le site est en cours de construction...
            </SpanDetail>
          )}
        </EmptyDiv>
        <StartPageLink
          onClick={() => {
            setShowDetail(true);
          }}
        >
          {t("StartPage.Begin")}
        </StartPageLink>
      </StartPageContent>
      <AlgeriaMap src={MapStartPage}></AlgeriaMap>
    </StartPageContainer>
  );
};

export default StartPage;
