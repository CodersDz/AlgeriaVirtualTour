import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useParams } from "react-router";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  SearchCatégoriePageContainer,
  TopContainer,
  TopContentContainer,
  CatégorieImg,
  CatégorieNom,
  SearchCatégorieContent,
  ContentWrapper,
  PubContainer,
} from "./SearchCatégorieElements";
import CatégorieSection from "../../components/CatégorieSection/CatégorieSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Catégories = [
  { catégorieName: "Art&Culture", idCatégorie: 8 },
  { catégorieName: "Hôtel", idCatégorie: 5 },
  { catégorieName: "Loisirs", idCatégorie: 4 },
  { catégorieName: "Monument", idCatégorie: 6 },
  { catégorieName: "Mosque", idCatégorie: 1 },
  { catégorieName: "Shopping", idCatégorie: 10 },
  { catégorieName: "Service", idCatégorie: 9 },
  { catégorieName: "Park", idCatégorie: 2 },
  { catégorieName: "Museum", idCatégorie: 7 },
  { catégorieName: "Restaurant", idCatégorie: 3 },
];
const SearchCatégorie = (props) => {
  const { categorie } = useParams();
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    Catégories.some((catégorie) => catégorie === categorie);
    if (props.location.state) {
      setLocations(props.location.state.locations);
    } else {
      axios
        .get("http://www.algeriavirtualtour.com/api/location")
        .then((response) => {
          setLocations(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  if (!Catégories.some((catégorie) => catégorie.catégorieName === categorie)) {
    return <Redirect to="/Search" />;
  }

  return (
    <SearchCatégoriePageContainer>
      <Navbar />
      <TopContainer bg={categorie}>
        <TopContentContainer>
          <CatégorieImg src={require(`./Images/${categorie}.png`).default} />
          <CatégorieNom>{categorie}</CatégorieNom>
        </TopContentContainer>
      </TopContainer>
      <SearchCatégorieContent>
        <ContentWrapper>
          <CatégorieSection
            locations={locations}
            sectionName={"Les Plus Visités"}
          />
          <CatégorieSection
            locations={locations}
            sectionName={"Récents Ajoutés"}
          />
          <CatégorieSection locations={locations} sectionName={"Générale"} />
        </ContentWrapper>
        <PubContainer>hello</PubContainer>
      </SearchCatégorieContent>
      <Footer />
    </SearchCatégoriePageContainer>
  );
};

export default SearchCatégorie;
