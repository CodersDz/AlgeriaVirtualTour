import React from "react";
import { motion } from "framer-motion";
import {
  PageContainer,
  PageContent,
  LeftContainer,
  LeftWrapper,
  Title,
  Paragraph,
  RightContainer,
} from "./LegalNoticeElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
const LegalNotice = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <PageContentGlobal
      fixed={false}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <PageContent>
        <LeftContainer>
          <LeftWrapper>
            <Title>{t("Legal_notice_page.Title")}</Title>
            <Paragraph>
              <b>AVT</b> c'est un site et une applications de tourisme virtuelle
              en Algérie fondé le 15 Décembre 2020 par
              <b> VIRTUEL ART PRODUCTION</b>, où vous trouvez plus de 140 lieus
              en 360° et 250 photos et vidéos, et une agenda spécial qui
              contienne des éventements touristiques, artistiques et culturelles
              fournis par des agences de voyages et des organisations et
              associations. AVT c'est un site et une applications de tourisme
              virtuelle en Algérie fondé le 15 Décembre 2020 par VIRTUEL ART
              PRODUCTION, où vous trouvez plus de 140 lieus en 360° et 250
              photos et vidéos, et une agenda spécial qui contienne des
              éventements touristiques, artistiques et culturelles fournis par
              des agences de voyages et des organisations et associations. AVT
              c'est un site et une applications de tourisme virtuelle en Algérie
              fondé le 15 Décembre 2020 par VIRTUEL ART PRODUCTION, où vous
              trouvez plus de 140 lieus en 360° et 250 photos et vidéos, et une
              agenda spécial qui contienne des éventements touristiques,
              artistiques et culturelles fournis par des agences de voyages et
              des organisations et associations. AVT c'est un site et une
              applications de tourisme virtuelle en Algérie fondé le 15 Décembre
              2020 par VIRTUEL ART PRODUCTION, où vous trouvez plus de 140 lieus
              en 360° et 250 photos et vidéos, et une agenda spécial qui
              contienne des éventements touristiques, artistiques et culturelles
              fournis par des agences de voyages et des organisations et
              associations. AVT c'est un site et une applications de tourisme
              virtuelle en Algérie fondé le 15 Décembre 2020 par VIRTUEL ART
              PRODUCTION, où vous trouvez plus de 140 lieus en 360° et 250
              photos et vidéos, et une agenda spécial qui contienne des
              éventements touristiques, artistiques et culturelles fournis par
              des agences de voyages et des organisations et associations. AVT
              c'est un site et une applications de tourisme virtuelle en Algérie
              fondé le 15 Décembre 2020 par VIRTUEL ART PRODUCTION, où vous
              trouvez plus de 140 lieus en 360° et 250 photos et vidéos, et une
              agenda spécial qui contienne des éventements touristiques,
              artistiques et culturelles fournis par des agences de voyages et
              des organisations et associations.{" "}
            </Paragraph>
          </LeftWrapper>
        </LeftContainer>
        <RightContainer>
          <DevicesContainer />
        </RightContainer>
      </PageContent>
    </PageContentGlobal>
  );
};

export default LegalNotice;
