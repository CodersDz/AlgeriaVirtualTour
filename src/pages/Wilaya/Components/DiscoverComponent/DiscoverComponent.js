import React from "react";
import { motion } from "framer-motion";
import {
  DiscoverLeftContainer,
  DiscoverLeftContainerContent,
  DiscoverH1,
  DiscoverCatégoriesContainer,
  DiscoverCatégoriesLi,
  DiscoverLiTitle,
} from "./DiscoverComponentElements";

import useTranslation from "../../../../hooks/useTranslation/useTranslation";

const DiscoverComponent = ({
  wilaya,
  filterLocation,
  setCurrentDiscoverOption,
  setCurrentSection,
}) => {
  const { t } = useTranslation();
  const Catégories = [
    {
      CatégorieName: t("SearchPage.Card.Art&Culture"),
      CatégorieId: 8,
    },
    {
      CatégorieName: t("SearchPage.Card.Hôtel"),
      CatégorieId: 5,
    },
    {
      CatégorieName: t("SearchPage.Card.Park&Loisirs"),
      CatégorieId: 4,
    },
    {
      CatégorieName: t("SearchPage.Card.Monument"),
      CatégorieId: 6,
    },
    {
      CatégorieName: t("SearchPage.Card.Mosque"),
      CatégorieId: 1,
    },
    {
      CatégorieName: t("SearchPage.Card.Shopping"),
      CatégorieId: 10,
    },
    {
      CatégorieName: t("SearchPage.Card.Service"),
      CatégorieId: 9,
    },
    {
      CatégorieName: t("SearchPage.Card.Directories"),
      CatégorieId: 2,
    },
    {
      CatégorieName: t("SearchPage.Card.Museum"),
      CatégorieId: 7,
    },
    {
      CatégorieName: t("SearchPage.Card.Restaurant"),
      CatégorieId: 3,
    },
  ];
  return (
    <DiscoverLeftContainer>
      <DiscoverLeftContainerContent>
        <DiscoverH1 as={motion.h1} layoutId={"h1"}>
          {wilaya.translatedName}
        </DiscoverH1>
        <DiscoverCatégoriesContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          {Catégories.map((categorie) => {
            return (
              <DiscoverCatégoriesLi
                as={motion.li}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setCurrentDiscoverOption({
                    name: categorie.CatégorieName,
                    id: categorie.CatégorieId,
                  });
                  filterLocation(categorie.CatégorieId);
                  setCurrentSection("Destination");
                }}
              >
                <DiscoverLiTitle>{categorie.CatégorieName}</DiscoverLiTitle>
              </DiscoverCatégoriesLi>
            );
          })}
        </DiscoverCatégoriesContainer>
      </DiscoverLeftContainerContent>
    </DiscoverLeftContainer>
  );
};

export default DiscoverComponent;
