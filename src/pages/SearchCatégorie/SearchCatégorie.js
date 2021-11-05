import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  SearchCatégoriePageContainer,
  TopContainer,
  TopContentContainer,
  CatégorieImg,
  CatégorieNom,
  SearchCatégoriePageContent,
  CatégorieSection,
  CatégorieH2,
  CardImg,
  CardText,
  LocationName,
  LocationP,
  CardBtnContainer,
  LeftCardBtnContainer,
} from "./SearchCatégorieElements";

import { FiGlobe } from "react-icons/fi";

import { ReactComponent as Internet } from "../../assets/svg/Internet.svg";
import { ReactComponent as Heart } from "../../assets/svg/Heart.svg";
import { ReactComponent as Save } from "../../assets/svg/Save.svg";

import Navbar from "../../components/Navbar/Navbar";
import LocationCard from "../../components/LocationCard/LocationCard";

const Locations = [
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
];
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
          <ScrollContainer
            className="ScrollContainer"
            vertical="false"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {Locations.map((location) => {
              return <LocationCard location={location} />;
            })}
          </ScrollContainer>
        </CatégorieSection>
        <CatégorieSection>
          <CatégorieH2>Récents Ajoutés</CatégorieH2>
          <ScrollContainer
            className="ScrollContainer"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {Locations.map((location) => {
              return <LocationCard location={location} />;
            })}
          </ScrollContainer>
        </CatégorieSection>
        <CatégorieSection>
          <CatégorieH2> Générale</CatégorieH2>
          <ScrollContainer
            className="ScrollContainer"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {Locations.map((location) => {
              return <LocationCard location={location} />;
            })}
          </ScrollContainer>
        </CatégorieSection>
      </SearchCatégoriePageContent>
    </SearchCatégoriePageContainer>
  );
};

export default SearchCatégorie;
