import React from "react";
import SelectLang from "../../components/SelectLang/SelectLang";
import { PageContainer, GoBack } from "./ChooseLanguageElements";
import { BiArrowBack } from "react-icons/bi";
const ChooseLanguage = ({ setOpenLanguage }) => {
  return (
    <PageContainer>
      <GoBack
        onClick={() => {
          setOpenLanguage(false);
        }}
      >
        <BiArrowBack color={"#fff"} size={32} />
      </GoBack>
      <SelectLang langOpen={true} />
    </PageContainer>
  );
};

export default ChooseLanguage;
