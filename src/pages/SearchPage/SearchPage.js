import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import {
  SearchPageContainer,
  SearchContentContainer,
  SearchContentWrapper,
  SearchH1,
  SearchP,
  BtnContainer,
  TextContainer,
} from "./SearchPageElements";
import CardContainer from "../../components/CardContainer/CardContainer";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SearchPage = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/location")
      .then((response) => {
        setLocations(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          <TextContainer>
            <SearchH1>Choisissez votre destination</SearchH1>
            <SearchP>
              Recherchez des centaines de lieux à travers l’Algérie et trouvez
              votre destination idéal.
            </SearchP>
          </TextContainer>

          <BtnContainer></BtnContainer>
          <CardContainer locations={locations} />
        </SearchContentWrapper>
      </SearchContentContainer>
      <Footer />
    </SearchPageContainer>
  );
};

export default SearchPage;
