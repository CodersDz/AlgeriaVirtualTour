//-----------------React and hooks imports---------------
import React, { useState } from "react";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { motion } from "framer-motion";
//-----------------Images imports---------------
//-----------------Elements imports---------------
import {
  LangContainer,
  LangWrapper,
  LangTitle,
  LangUl,
  LangLi,
  RadioLabel,
  RadioInput,
  ConfirmBtn,
} from "./SelectLangElements";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
const SelectLang = ({ langOpen }) => {
  const navigate = useNavigate();
  const isDekstop = useWindowSize();
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(language);

  const onOptionClicked = (value) => () => {
    setSelectedLang(value);
    if (isDekstop) {
      setLanguage(value);
      window.location.reload();
    }
  };
  const confirmLangMobile = () => {
    setLanguage(selectedLang);
    window.location.reload();
  };
  const verifyChecked = (ref) => {
    if (language === ref) {
      return true;
    } else return false;
  };
  return (
    <LangContainer
      langOpen={langOpen}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <LangWrapper>
        <LangTitle>
          {isDekstop ? t("NavBar.Language") : t("ChooseLanguage.Title")}
        </LangTitle>
        <LangUl>
          <LangLi>
            <RadioLabel for="ar" onClick={onOptionClicked("ar")}>
              Arabe
              <RadioInput
                type="radio"
                id="ar"
                name="lang"
                value="ar"
                defaultChecked={verifyChecked("ar")}
              ></RadioInput>
            </RadioLabel>
          </LangLi>
          <LangLi>
            <RadioLabel for="en" onClick={onOptionClicked("en")}>
              Anglais
              <RadioInput
                type="radio"
                id="en"
                name="lang"
                value="en"
                defaultChecked={verifyChecked("en")}
              ></RadioInput>
            </RadioLabel>
          </LangLi>
          <LangLi>
            <RadioLabel for="fr" onClick={onOptionClicked("fr")}>
              Français
              <RadioInput
                type="radio"
                id="fr"
                name="lang"
                value="fr"
                defaultChecked={verifyChecked("fr")}
              ></RadioInput>
            </RadioLabel>
          </LangLi>
        </LangUl>
        {!isDekstop && (
          <ConfirmBtn
            onClick={() => {
              confirmLangMobile();
            }}
          >
            {t("ChooseLanguage.Confirm")}
          </ConfirmBtn>
        )}
      </LangWrapper>
    </LangContainer>
  );
};

export default SelectLang;
