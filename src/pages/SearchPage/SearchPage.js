import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  SearchPageContainer,
  SearchContentContainer,
  SearchContentWrapper,
  SearchH1,
  SearchP,
  BtnContainer,
  CardSearch,
} from "./SearchPageElements";
import CardContainer from "../../components/CardContainer/CardContainer";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const SearchPage = () => {
  return (
    <SearchPageContainer
      key="SearchPage"
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <SearchContentContainer>
        <SearchContentWrapper>
          <SearchH1>Choisissez votre destination</SearchH1>
          <SearchP>
            Recherchez des centaines de lieux à travers l’Algérie et trouvez
            votre destination idéal.
          </SearchP>
          <BtnContainer></BtnContainer>
          <CardContainer />
        </SearchContentWrapper>
      </SearchContentContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;
