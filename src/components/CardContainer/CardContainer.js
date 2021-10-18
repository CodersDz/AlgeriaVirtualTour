import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const Cards = [
  {
    CardImg: Art_Culture,
    CardTitle: "Art & Culture",
    CardUrl: "https://google.com",
  },
  { CardImg: Hôtel, CardTitle: "Hôtel", CardUrl: "https://google.com" },
  { CardImg: Loisirs, CardTitle: "Loisirs", CardUrl: "https://google.com" },
  { CardImg: Monument, CardTitle: "Monument", CardUrl: "https://google.com" },
  { CardImg: Mosquée, CardTitle: "Mosquée", CardUrl: "https://google.com" },
  { CardImg: Shopping, CardTitle: "Shopping", CardUrl: "https://google.com" },
  { CardImg: Service, CardTitle: "Service", CardUrl: "https://google.com" },
  { CardImg: Park, CardTitle: "Park", CardUrl: "https://google.com" },
  { CardImg: Musée, CardTitle: "Musée", CardUrl: "https://google.com" },
  {
    CardImg: Restaurant,
    CardTitle: "Restaurant",
    CardUrl: "https://google.com",
  },
];
const CardContainer = () => {
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
