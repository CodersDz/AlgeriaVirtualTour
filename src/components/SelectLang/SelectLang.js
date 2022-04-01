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
} from "./SelectLangElements";
const SelectLang = ({ langOpen }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState(language);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setLanguage(value);
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
        <LangTitle>{t("NavBar.Language")}</LangTitle>
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
      </LangWrapper>
    </LangContainer>
  );
};

export default SelectLang;
