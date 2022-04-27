import React, { useState } from "react";
import {
  Container,
  Wrapper,
  GoBackContainer,
  SearchContainer,
  SearchWrapper,
  IconeContainer,
  InputContainer,
  Input,
  DeleteContainer,
  HiddenUl,
  HiddenLi,
} from "./MobileTopContainerElements";
import { BiArrowBack } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { ReactComponent as SearchIcone } from "../../../../assets/svg/SearchIcone.svg";
import { useNavigate } from "react-router-dom";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";

const MobileTopContainer = ({ wilayas, wilayaFilter }) => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const setWilayaFilter = (wilaya) => {
    setInput(wilaya.translatedName);
    setDisplay(false);
    wilayaFilter(wilaya);
  };
  const clearFilter = () => {
    setInput("");
    wilayaFilter(null);
    setDisplay(false);
  };
  return (
    <Container>
      <Wrapper>
        <GoBackContainer onClick={goBack}>
          <BiArrowBack size={42} />
        </GoBackContainer>
        <SearchContainer>
          <SearchWrapper>
            <IconeContainer>
              <SearchIcone />
            </IconeContainer>
            <InputContainer>
              <Input
                onFocus={() => {
                  setDisplay(true);
                }}
                onChange={handleInput}
                value={input}
                placeholder={t("MapPage.SearchWilayas")}
              />
            </InputContainer>
            <DeleteContainer onClick={clearFilter}>
              <TiDelete size={24} />
            </DeleteContainer>
          </SearchWrapper>
          <HiddenUl $display={display}>
            {wilayas
              .filter((wilaya) => {
                if (
                  wilaya.translatedName
                    .toLowerCase()
                    .includes(input.toLowerCase())
                )
                  return wilaya;
              })
              .map((wilaya) => {
                return (
                  <HiddenLi
                    onClick={() => {
                      setWilayaFilter(wilaya);
                    }}
                  >
                    {wilaya.translatedName}
                  </HiddenLi>
                );
              })}
          </HiddenUl>
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default MobileTopContainer;
