import React from "react";
import {
  PageContent,
  LeftContainer,
  LeftWrapper,
  Title,
  Paragraph,
  RightContainer,
} from "./LegalNoticeElements";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { PageContentGlobal } from "../../GlobalStyles";
const LegalNotice = () => {
  const { t } = useTranslation();
  return (
    <PageContentGlobal fixed={false}>
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
