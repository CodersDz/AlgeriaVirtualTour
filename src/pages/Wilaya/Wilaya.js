import React, { useState } from "react";
import { useParams } from "react-router";
import {
  WilayaPageContainer,
  WilayaPageContentContainer,
  LeftContainer,
  RightContainer,
  InfoLeftContainer,
  InfoLeftContainerContent,
  InfoH1,
  InfoP,
  InfoRightContainer,
  SvgInfoImg,
  RightWilayaNav,
  RightNavLi,
  DiscoverLeftContainer,
  DiscoverLeftContainerContent,
  DiscoverRightContainer,
  DiscoverH1,
  DiscoverCatégoriesContainer,
  DiscoverCatégoriesLi,
} from "./WilayaElements";
import Navbar from "../../components/Navbar/Navbar";
import { AnimateSharedLayout, motion } from "framer-motion";
import useTranslation from "../../hooks/useTranslation/useTranslation";
const Wilaya = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const Catégories = [
    {
      CatégorieName: t("SearchPage.Card.Art_Culture"),
    },
    {
      CatégorieName: t("SearchPage.Card.Hôtel"),
    },
    {
      CatégorieName: t("SearchPage.Card.Loisirs"),
    },
    {
      CatégorieName: t("SearchPage.Card.Monument"),
    },
    {
      CatégorieName: t("SearchPage.Card.Mosque"),
    },
    {
      CatégorieName: t("SearchPage.Card.Shopping"),
    },
    {
      CatégorieName: t("SearchPage.Card.Service"),
    },
    {
      CatégorieName: t("SearchPage.Card.Park"),
    },
    {
      CatégorieName: t("SearchPage.Card.Museum"),
    },
    {
      CatégorieName: t("SearchPage.Card.Restaurant"),
    },
  ];
  const { wilayaname } = useParams();
  const [currectSection, setCurrentSection] = useState("Info");
  const ChangeLeft = () => {
    if (currectSection === "Info") {
      return (
        <InfoLeftContainer>
          <InfoLeftContainerContent>
            <InfoH1 as={motion.h1} layoutId={"h1"}>
              {wilayaname}
            </InfoH1>
            <InfoP>
              Alger est la capitale de l'Algérie. Elle se trouve sur la côte
              méditerranéenne du pays. Elle est connue pour les bâtiments
              blanchis à la chaux de la Casbah…
            </InfoP>
          </InfoLeftContainerContent>
        </InfoLeftContainer>
      );
    } else if (currectSection === "Discover") {
      return (
        <DiscoverLeftContainer>
          <DiscoverLeftContainerContent>
            <DiscoverH1 as={motion.h1} layoutId={"h1"}>
              {wilayaname}
            </DiscoverH1>
            <DiscoverCatégoriesContainer>
              {Catégories.map((categorie) => {
                return (
                  <DiscoverCatégoriesLi
                    onClick={() => {
                      setCurrentSection("Destination");
                    }}
                  >
                    {categorie.CatégorieName}
                  </DiscoverCatégoriesLi>
                );
              })}
            </DiscoverCatégoriesContainer>
          </DiscoverLeftContainerContent>
        </DiscoverLeftContainer>
      );
    }
    return null;
  };
  const ChangeRight = () => {
    if (currectSection === "Info") {
      return (
        <InfoRightContainer>
          <SvgInfoImg
            src={require(`./Svg/${wilayaname}/${wilayaname}.svg`).default}
          />
        </InfoRightContainer>
      );
    } else if (currectSection === "Discover") {
      return (
        <DiscoverRightContainer>
          <SvgInfoImg
            as={motion.img}
            animate={{ scale: 1.2 }}
            src={require(`./Svg/${wilayaname}/${wilayaname}.svg`).default}
          />
        </DiscoverRightContainer>
      );
    }
    return null;
  };
  console.log(wilayaname);
  return (
    <WilayaPageContainer bg={`./Images/BgImages/${wilayaname}.jpg`}>
      <Navbar />
      <AnimateSharedLayout>
        <WilayaPageContentContainer>
          <LeftContainer>
            <ChangeLeft />
          </LeftContainer>
          <RightContainer>
            <ChangeRight />
          </RightContainer>
        </WilayaPageContentContainer>
      </AnimateSharedLayout>
      <RightWilayaNav>
        <RightNavLi
          onClick={() => {
            setCurrentSection("Destination");
          }}
        >
          Déstination
        </RightNavLi>
        <RightNavLi
          onClick={() => {
            setCurrentSection("Info");
          }}
        >
          Plus D'info
        </RightNavLi>
        <RightNavLi
          onClick={() => {
            setCurrentSection("Discover");
          }}
        >
          Découvrir
        </RightNavLi>
      </RightWilayaNav>
    </WilayaPageContainer>
  );
};

export default Wilaya;
