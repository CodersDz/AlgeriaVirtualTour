//-----------------React and hooks imports---------------
import React from "react";
import useTranslation from "../../hooks/useTranslation/useTranslation";
//-----------------Elements imports---------------
import { StartPageContainer, StartPageLink } from "./StartPageElements";

//-----------------Logo import---------------
import StartPageLogo from "../../assets/Images/StartPageLogo.png";
const StartPage = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <StartPageContainer>
      <img src={StartPageLogo} />
      <StartPageLink to="/home">{t("salam")}</StartPageLink>
    </StartPageContainer>
  );
};

export default StartPage;
