import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  CardContainerWrapper,
  Card,
  CardContent,
  CardContentIcone,
  CardContentTitle,
} from "./CardContainerElements";
import Catégories from "../../assets/utilities/Catégories";
const CardContainer = ({ locations }) => {
  let navigate = useNavigate();
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <CardContainerWrapper>
      {Catégories.map((card) => {
        let filtredLocations = locations.filter((location) => {
          if (location.id_type_location === card.idCatégorie) {
            return location;
          } else return null;
        });
        return (
          <Card
            key={card.idCatégorie}
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate(card.catégorieSearchUrl, {
                state: { locations: filtredLocations },
              });
            }}
            bg={card.bgImageCatégorie}
          >
            <CardContent>
              <CardContentIcone src={card.icone}></CardContentIcone>
              <CardContentTitle>
                {t(`SearchPage.Card.${card.catégorieName}`)}
              </CardContentTitle>
            </CardContent>
          </Card>
        );
      })}
    </CardContainerWrapper>
  );
};

export default CardContainer;
