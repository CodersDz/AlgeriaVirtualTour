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
import Art_Culture from "./Art&Culture.jpg";
import Hôtel from "./Hôtel.jpg";
import Loisirs from "./Loisirs.jpeg";
import Monument from "./Monument.jpg";
import Mosquée from "./Mosquée.jpg";
import Shopping from "./Shopping.jpeg";
import Service from "./Service.jpg";
import Park from "./Park.jpg";
import Musée from "./Musée.jpg";
import Restaurant from "./Restaurant.jpg";

const CardContainer = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const Cards = [
    {
      CardImg: Art_Culture,
      CardTitle: t("SearchPage.Card.Art_Culture"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Hôtel,
      CardTitle: t("SearchPage.Card.Hôtel"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Loisirs,
      CardTitle: t("SearchPage.Card.Loisirs"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Monument,
      CardTitle: t("SearchPage.Card.Monument"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Mosquée,
      CardTitle: t("SearchPage.Card.Mosque"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Shopping,
      CardTitle: t("SearchPage.Card.Shopping"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Service,
      CardTitle: t("SearchPage.Card.Service"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Park,
      CardTitle: t("SearchPage.Card.Park"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Musée,
      CardTitle: t("SearchPage.Card.Museum"),
      CardUrl: "https://google.com",
    },
    {
      CardImg: Restaurant,
      CardTitle: t("SearchPage.Card.Restaurant"),
      CardUrl: "https://google.com",
    },
  ];
  return (
    <CardContainerWrapper>
      {Cards.map((card) => {
        return (
          <Card
            whileHover={{ scale: 1.1 }}
            as={motion.div}
            bg={card.CardImg}
            to={card.CardUrl}
          >
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
