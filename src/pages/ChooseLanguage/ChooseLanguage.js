import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectLang from "../../components/SelectLang/SelectLang";
import useWindowSize from "../../hooks/useWindowSize";
import { PageContainer, GoBack } from "./ChooseLanguageElements";
import { BiArrowBack } from "react-icons/bi";
const ChooseLanguage = () => {
  const isDekstop = useWindowSize();
  const navigate = useNavigate();
  useEffect(() => {
    if (isDekstop) navigate("/home");
  }, []);
  return (
    <PageContainer>
      <GoBack
        onClick={() => {
          navigate(-1);
        }}
      >
        <BiArrowBack color={"#fff"} size={32} />
      </GoBack>
      <SelectLang langOpen={true} />
    </PageContainer>
  );
};

export default ChooseLanguage;
