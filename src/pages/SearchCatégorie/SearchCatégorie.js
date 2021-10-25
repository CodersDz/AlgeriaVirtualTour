import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import {
  SearchCatégoriePageContainer,
  TopContainer,
  TopContentContainer,
  CatégorieImg,
  CatégorieNom,
  SearchCatégoriePageContent,
} from "./SearchCatégorieElements";
import Navbar from "../../components/Navbar/Navbar";
const SearchCatégorie = () => {
  const { categorie } = useParams();
  const Catégories = [
    "Art&Culture",
    "Hôtel",
    "Loisirs",
    "Monument",
    "Mosque",
    "Shopping",
    "Service",
    "Park",
    "Museum",
    "Restaurant",
  ];

  if (!Catégories.includes(categorie)) {
    return <Redirect to="/Search" />;
  }
  return (
    <SearchCatégoriePageContainer>
      <TopContainer bg={categorie}>
        <Navbar />
        <TopContentContainer>
          <CatégorieImg src={require(`./Images/${categorie}.png`).default} />
          <CatégorieNom>{categorie}</CatégorieNom>
        </TopContentContainer>
      </TopContainer>
      <SearchCatégoriePageContent></SearchCatégoriePageContent>
    </SearchCatégoriePageContainer>
  );
};

export default SearchCatégorie;
