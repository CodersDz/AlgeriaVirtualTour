import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Wrapper,
  InfoP,
  TextContainer,
  BtnContainer,
  ReadMoreBtn,
  ReadMoreSpan,
} from "./InfoMobileComponentElements";
import useTranslation from "../../../../../hooks/useTranslation/useTranslation";
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};
function InfoMobileComponent({ wilaya }) {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <InfoP as={motion.p} readMore={readMore}>
            {wilaya.translatedDescription}
          </InfoP>
        </TextContainer>
        <BtnContainer>
          <ReadMoreBtn
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {!readMore && (
              <ReadMoreSpan
                as={motion.span}
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
                variants={BtnVariants}
                initial="initial"
                animate="animate"
              >
                {t("General.ReadLess")}
              </ReadMoreSpan>
            )}
          </ReadMoreBtn>
        </BtnContainer>
      </Wrapper>
    </Container>
  );
}

export default InfoMobileComponent;
