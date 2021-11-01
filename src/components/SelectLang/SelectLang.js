//-----------------React and hooks imports---------------
import React, { useState } from "react";
import useTranslation from "../../hooks/useTranslation/useTranslation";
//-----------------Images imports---------------
import ar_flag from "../../assets/Images/ar_flag.png";
import en_flag from "../../assets/Images/en_flag.png";
import fr_flag from "../../assets/Images/fr_flag.png";
//-----------------Elements imports---------------
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  FlagImg,
  DropDownImg,
} from "./SelectLangElements";
const options = [
  { ref: "fr", name: "Français", flag: { fr_flag } },
  { ref: "ar", name: "العربية", flag: { ar_flag } },
  { ref: "en", name: "English", flag: { en_flag } },
];
const SelectLang = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(language);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setLanguage(value);
    setIsOpen(false);
    window.location.reload();
  };
  const selectFlag = (ref) => {
    if (ref === "fr") {
      return fr_flag;
    } else if (ref === "ar") {
      return ar_flag;
    } else return en_flag;
  };
  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onMouseOver={toggling}>
          {<FlagImg src={selectFlag(selectedOption)} />}
        </DropDownHeader>

        <DropDownListContainer>
          <DropDownList>
            {options
              .filter((option) => {
                if (option.ref !== selectedOption) return option;
              })
              .map((option) => (
                <ListItem
                  onClick={onOptionClicked(option.ref)}
                  key={Math.random()}
                >
                  <DropDownImg src={selectFlag(option.ref)} />
                  {option.name}
                </ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>
    </div>
  );
};

export default SelectLang;
