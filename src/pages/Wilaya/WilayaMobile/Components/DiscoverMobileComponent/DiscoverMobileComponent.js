import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Wrapper } from "./DiscoverMobileComponentElements";
import useTranslation from "../../../../../hooks/useTranslation/useTranslation";
import CardContainer from "../../../../../components/CardContainer/CardContainer";
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};
function DiscoverMobileComponent({ locations }) {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <CardContainer locations={locations}></CardContainer>
      </Wrapper>
    </Container>
  );
}

export default DiscoverMobileComponent;
