import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  LeftContainer,
  RightContainer,
  ContentContainer,
  CatégorieName,
  IconeContainer,
  CatégorieIcone,
} from "./MobileCatégorieElements";
import { ReactComponent as GoBackIcone } from "./GoBackIcone.svg";
import useTranslation from "../../hooks/useTranslation/useTranslation";
const MobileCatégorie = ({ catégorieInformations, wilayaId }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const history = useHistory();
  // catégorieName: "Mosque",
  //   catégorieTranslatedName: t("SearchPage.Card.Mosque"),
  //   bgImageCatégorie: Bg_Mosque,
  //   mapImageCatégorie: Mosque,
  //   idCatégorie: 1,
  //icone
  const goBack = () => {
    if (
      window.location.pathname
        .toLocaleLowerCase()
        .includes("/search".toLocaleLowerCase())
    ) {
      history.push("/search");
    } else {
      if (wilayaId) history.push(`/wilaya/${wilayaId}`);
    }
  };
  return (
    <Container>
      <LeftContainer onClick={goBack}>
        <GoBackIcone />
      </LeftContainer>
      <RightContainer bg={catégorieInformations.bgImageCatégorie}>
        <ContentContainer>
          <IconeContainer>
            <CatégorieIcone src={catégorieInformations.icone} />
          </IconeContainer>
          <CatégorieName>
            {t(`SearchPage.Card.${catégorieInformations.catégorieName}`)}
            {}
          </CatégorieName>
        </ContentContainer>
      </RightContainer>
    </Container>
  );
};

export default MobileCatégorie;
