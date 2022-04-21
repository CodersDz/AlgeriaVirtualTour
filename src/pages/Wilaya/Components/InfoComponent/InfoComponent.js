import React, { useState } from "react";
import { InfoLeftContainer, InfoH1, InfoP } from "./InfoComponentElements";
import { motion } from "framer-motion";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
import { ReadMoreSpan } from "../../../../GlobalStyles";
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
const InfoComponent = ({ wilaya }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [readMore, setReadMore] = useState(false);
  return (
    <InfoLeftContainer>
      <InfoH1 as={motion.h1} layoutId={"h1"}>
        {wilaya.translatedName}
      </InfoH1>
      <InfoP as={motion.p} readMore={readMore}>
        {wilaya.translatedDescription}
      </InfoP>
      {!readMore && (
        <ReadMoreSpan
          as={motion.span}
          onClick={() => {
            setReadMore(!readMore);
          }}
          variants={BtnVariants}
          initial="initial"
          animate="animate"
        >
          {t("General.ReadMore")}
        </ReadMoreSpan>
      )}
      {readMore && (
        <ReadMoreSpan
          as={motion.span}
          onClick={() => {
            setReadMore(!readMore);
          }}
          variants={BtnVariants}
          initial="initial"
          animate="animate"
        >
          {t("General.ReadLess")}
        </ReadMoreSpan>
      )}
    </InfoLeftContainer>
  );
};

export default InfoComponent;
