import React from "react";
import {
  PageContainer,
  PageContent,
  LeftContainer,
  Title,
  Paragraph,
  RightContainer,
} from "./LegalNoticeElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";

const LegalNotice = () => {
  return (
    <PageContainer>
      <Navbar />
      <PageContent>
        <LeftContainer>
          <Title>Motion Légale</Title>
          <Paragraph>
            <b>AVT</b> c'est un site et une applications de tourisme virtuelle
            en Algérie fondé le 15 Décembre 2020 par
            <b>VIRTUEL ART PRODUCTION</b>, où vous trouvez plus de 140 lieus en
            360° et 250 photos et vidéos, et une agenda spécial qui contienne
            des éventements touristiques, artistiques et culturelles fournis par
            des agences de voyages et des organisations et associations. AVT
            c'est un site et une applications de tourisme virtuelle en Algérie
            fondé le 15 Décembre 2020 par VIRTUEL ART PRODUCTION, où vous
            trouvez plus de 140 lieus en 360° et 250 photos et vidéos, et une
            agenda spécial qui contienne des éventements touristiques,
            artistiques et culturelles fournis par des agences de voyages et des
            organisations et associations. AVT c'est un site et une applications
            de tourisme virtuelle en Algérie fondé le 15 Décembre 2020 par
            VIRTUEL ART PRODUCTION, où vous trouvez plus de 140 lieus en 360° et
            250 photos et vidéos, et une agenda spécial qui contienne des
            éventements touristiques, artistiques et culturelles fournis par des
            agences de voyages et des organisations et associations. AVT c'est
            un site et une applications de tourisme virtuelle en Algérie fondé
            le 15 Décembre 2020 par VIRTUEL ART PRODUCTION, où vous trouvez plus
            de 140 lieus en 360° et 250 photos et vidéos, et une agenda spécial
            qui contienne des éventements touristiques, artistiques et
            culturelles fournis par des agences de voyages et des organisations
            et associations. AVT c'est un site et une applications de tourisme
            virtuelle en Algérie fondé le 15 Décembre 2020 par VIRTUEL ART
            PRODUCTION, où vous trouvez plus de 140 lieus en 360° et 250 photos
            et vidéos, et une agenda spécial qui contienne des éventements
            touristiques, artistiques et culturelles fournis par des agences de
            voyages et des organisations et associations. AVT c'est un site et
            une applications de tourisme virtuelle en Algérie fondé le 15
            Décembre 2020 par VIRTUEL ART PRODUCTION, où vous trouvez plus de
            140 lieus en 360° et 250 photos et vidéos, et une agenda spécial qui
            contienne des éventements touristiques, artistiques et culturelles
            fournis par des agences de voyages et des organisations et
            associations.{" "}
          </Paragraph>
        </LeftContainer>
        <RightContainer>
          <DevicesContainer />
        </RightContainer>
      </PageContent>
      <Footer />
    </PageContainer>
  );
};

export default LegalNotice;
