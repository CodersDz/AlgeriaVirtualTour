import React, { useState } from "react";
import { useParams } from "react-router";
import ScrollContainer from "react-indiana-drag-scroll";
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
  DestinationLeftContainer,
  DestinationRightContainer,
  DestinationH1,
  DestinationNameContainer,
  DestinationLi,
  DestinationImg,
  DestinationLiTextContainer,
  DestinationName,
  DestinationDescription,
  SvgDestinationImg,
} from "./WilayaElements";
import { ReadMoreBtn } from "../../GlobalStyles";
import Navbar from "../../components/Navbar/Navbar";
import { AnimateSharedLayout, motion } from "framer-motion";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import "./WilayaStyles.css";
import { ReactComponent as Position } from "./Svg/Position.svg";
const Destinations = [
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
  {
    DestinationName: "Alger",
    DestinationDescription: "Alger",
    DestinationImg: "./Images/BgImages/Alger.jpg",
  },
];
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
const Wilaya = () => {
  const [readMore, setReadMore] = useState(false);
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
  const [currentSection, setCurrentSection] = useState("Info");
  const ChangeLeft = () => {
    if (currentSection === "Info") {
      return (
        <InfoLeftContainer>
          <InfoLeftContainerContent>
            <InfoH1 as={motion.h1} layoutId={"h1"}>
              {wilayaname}
            </InfoH1>
            <InfoP as={motion.p}>
              Alger est la capitale de l'Algérie. Elle se trouve sur la côte
              méditerranéenne du pays. Elle est connue pour les bâtiments
              blanchis à la chaux de la Casbah…
            </InfoP>
            {readMore && (
              <InfoP>
                Alger est une ville cosmopolite et plurilingue, la ville a connu
                un accroissement démographique exponentiel dû à des vagues de
                migration provenant des villes du pays et à l’exode rural, qui
                s'est traduit sur le plan sociolinguistique par un brassage
                d’Algériens venus de toutes les régions du pays, avec leurs
                parlers respectifs. En outre, le parler des jeunes se
                caractérise par une innovation linguistique et une créativité
                lexicale
              </InfoP>
            )}
            <ReadMoreBtn
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {!readMore && (
                <motion.span
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  Lire La suite
                </motion.span>
              )}
              {readMore && (
                <motion.span
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  Moins
                </motion.span>
              )}
            </ReadMoreBtn>
          </InfoLeftContainerContent>
        </InfoLeftContainer>
      );
    } else if (currentSection === "Discover") {
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
                    as={motion.li}
                    whileHover={{ scale: 1.05 }}
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
    } else if (currentSection === "Destination") {
      return (
        <DestinationLeftContainer>
          <DestinationH1 as={motion.h1} layoutId={"h1"}>
            {wilayaname}
          </DestinationH1>
          <ScrollContainer
            hideScrollbars="false"
            className="ScrollContainer"
            horizontal="false"
          >
            {Destinations.map((destination) => {
              return (
                <DestinationLi as={motion.li}>
                  <DestinationImg
                    src={require(`${destination.DestinationImg}`).default}
                  />
                  <DestinationLiTextContainer>
                    <DestinationNameContainer>
                      <Position />
                      <DestinationName>
                        {destination.DestinationName}
                      </DestinationName>
                    </DestinationNameContainer>
                    <DestinationDescription>
                      {destination.DestinationDescription}
                    </DestinationDescription>
                  </DestinationLiTextContainer>
                </DestinationLi>
              );
            })}
          </ScrollContainer>
        </DestinationLeftContainer>
      );
    } else return null;
  };
  const ChangeRight = () => {
    if (currentSection === "Info") {
      return (
        <InfoRightContainer>
          <SvgInfoImg
            as={motion.img}
            layouId={"SvgImg"}
            animate={{ scale: 1.9 }}
            src={require(`./Svg/${wilayaname}/${wilayaname}.svg`).default}
          />
        </InfoRightContainer>
      );
    } else if (currentSection === "Discover") {
      return (
        <DiscoverRightContainer>
          <SvgInfoImg
            as={motion.img}
            layouId={"SvgImg"}
            animate={{ scale: 0.9 }}
            src={require(`./Svg/${wilayaname}/${wilayaname}.svg`).default}
          />
        </DiscoverRightContainer>
      );
    } else if (currentSection === "Destination") {
      return (
        <DestinationRightContainer>
          <SvgDestinationImg
            as={motion.img}
            layouId={"SvgImg"}
            animate={{ scale: 1.1 }}
            src={require(`./Svg/${wilayaname}/${wilayaname}.svg`).default}
          />
        </DestinationRightContainer>
      );
    } else return null;
  };
  console.log(wilayaname);
  return (
    <WilayaPageContainer bg={`./Images/BgImages/${wilayaname}.jpg`}>
      <Navbar />
      <AnimateSharedLayout>
        <WilayaPageContentContainer>
          <LeftContainer currentSection={currentSection}>
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
