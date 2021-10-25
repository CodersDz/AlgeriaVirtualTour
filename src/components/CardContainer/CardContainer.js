import React from "react";
import { motion } from "framer-motion";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  CardContainerWrapper,
  Card,
  CardContent,
  CardContentImg,
  CardContentTitle,
} from "./CardContainerElements";
import Art_Culture from "../../assets/Images/SearchImages/Art&Culture.jpg";
import Hôtel from "../../assets/Images/SearchImages/Hôtel.jpg";
import Loisirs from "../../assets/Images/SearchImages/Loisirs.jpg";
import Monument from "../../assets/Images/SearchImages/Monument.jpg";
import Mosquée from "../../assets/Images/SearchImages/Mosque.jpg";
import Shopping from "../../assets/Images/SearchImages/Shopping.jpg";
import Service from "../../assets/Images/SearchImages/Service.jpg";
import Park from "../../assets/Images/SearchImages/Park.jpg";
import Musée from "../../assets/Images/SearchImages/Museum.jpg";
import Restaurant from "../../assets/Images/SearchImages/Restaurant.jpg";

const CardContainer = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const Cards = [
    {
      CardImg: Art_Culture,
      CardTitle: t("SearchPage.Card.Art_Culture"),
      CardUrl: "/Search/Art&Culture",
    },
    {
      CardImg: Hôtel,
      CardTitle: t("SearchPage.Card.Hôtel"),
      CardUrl: "/Search/Hôtel",
    },
    {
      CardImg: Loisirs,
      CardTitle: t("SearchPage.Card.Loisirs"),
      CardUrl: "/Search/Loisirs",
    },
    {
      CardImg: Monument,
      CardTitle: t("SearchPage.Card.Monument"),
      CardUrl: "/Search/Monument",
    },
    {
      CardImg: Mosquée,
      CardTitle: t("SearchPage.Card.Mosque"),
      CardUrl: "/Search/Mosque",
    },
    {
      CardImg: Shopping,
      CardTitle: t("SearchPage.Card.Shopping"),
      CardUrl: "/Search/Shopping",
    },
    {
      CardImg: Service,
      CardTitle: t("SearchPage.Card.Service"),
      CardUrl: "/Search/Service",
    },
    {
      CardImg: Park,
      CardTitle: t("SearchPage.Card.Park"),
      CardUrl: "/Search/Park",
    },
    {
      CardImg: Musée,
      CardTitle: t("SearchPage.Card.Museum"),
      CardUrl: "/Search/Museum",
    },
    {
      CardImg: Restaurant,
      CardTitle: t("SearchPage.Card.Restaurant"),
      CardUrl: "/Search/Restaurant",
    },
  ];
  return (
    <CardContainerWrapper>
      {Cards.map((card) => {
        console.log(card.CardUrl);
        return (
          <Card to={card.CardUrl} bg={card.CardImg}>
            <CardContent>
              <CardContentImg />
              <CardContentTitle>{card.CardTitle}</CardContentTitle>
            </CardContent>
          </Card>
        );
      })}
    </CardContainerWrapper>
  );
};

export default CardContainer;
