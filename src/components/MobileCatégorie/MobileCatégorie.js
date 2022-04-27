import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LeftContainer,
  RightContainer,
  ContentContainer,
  CatégorieName,
  IconeContainer,
  CatégorieIcone,
} from "./MobileCatégorieElements";
import { ReactComponent as GoBackIcone } from "../../assets/svg/GoBackIcone.svg";
import useTranslation from "../../hooks/useTranslation/useTranslation";
const MobileCatégorie = ({ catégorieInformations }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
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
