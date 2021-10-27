import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import {
  SearchCatégoriePageContainer,
  TopContainer,
  TopContentContainer,
  CatégorieImg,
  CatégorieNom,
  SearchCatégoriePageContent,
  CatégorieSection,
  CatégorieH2,
  LocationCard,
} from "./SearchCatégorieElements";
import Navbar from "../../components/Navbar/Navbar";
import ScrollContainer from "react-indiana-drag-scroll";

import "./SearchCatégorieStyles.css";

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
      <SearchCatégoriePageContent>
        <CatégorieSection>
          <CatégorieH2>Les Plus Visités</CatégorieH2>
          <ScrollContainer className="ScrollContainer">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </ScrollContainer>
        </CatégorieSection>
        <CatégorieSection>
          <CatégorieH2>Récents Ajoutés</CatégorieH2>
          <ScrollContainer className="ScrollContainer">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </ScrollContainer>
        </CatégorieSection>
        <CatégorieSection>
          <CatégorieH2> Générale</CatégorieH2>
          <ScrollContainer className="ScrollContainer">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </ScrollContainer>
        </CatégorieSection>
      </SearchCatégoriePageContent>
    </SearchCatégoriePageContainer>
  );
};

export default SearchCatégorie;
