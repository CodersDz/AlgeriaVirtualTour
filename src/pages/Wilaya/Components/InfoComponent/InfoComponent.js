import React from "react";
import {
  InfoLeftContainer,
  InfoH1,
  InfoP,
  ReadMoreBtn,
  BtnContainer,
} from "./InfoComponentElements";
import { motion } from "framer-motion";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};
const InfoComponent = ({ wilaya, setReadMore, readMore }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <InfoLeftContainer>
      <InfoH1 as={motion.h1} layoutId={"h1"}>
        {wilaya.translatedName}
      </InfoH1>
      <InfoP as={motion.p} readMore={readMore}>
        {wilaya.translatedDescription}
      </InfoP>
      <BtnContainer>
        <ReadMoreBtn
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {!readMore && (
            <motion.span
              variants={BtnVariants}
              initial="initial"
              animate="animate"
            >
              {t("General.ReadMore")}
            </motion.span>
          )}
          {readMore && (
            <motion.span
              variants={BtnVariants}
              initial="initial"
              animate="animate"
            >
              {t("General.ReadLess")}
            </motion.span>
          )}
        </ReadMoreBtn>
      </BtnContainer>
    </InfoLeftContainer>
  );
};

export default InfoComponent;
