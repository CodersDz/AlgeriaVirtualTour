import React from "react";
import { motion } from "framer-motion";
import {
  ContentRight,
  ContentRightWrapper,
  ContentRightImgs,
  MoniteurImg,
  PcPortableImg,
  TéléphoneImg,
  TabeletteImg,
  StoreContainer,
  StoreP,
  StoreIcones,
  StoreIcone,
} from "./RightContainerElements";
import Moniteur from "./Moniteur.png";
import PcPortable from "./PcPortable.png";
import Tablette from "./Tablette.png";
import Téléphone from "./Téléphone.png";

import AppStore from "./AppStore.png";
import PlayStore from "./PlayStore.png";

const RightContainer = () => {
  return (
    <ContentRight>
      <ContentRightWrapper>
        <ContentRightImgs>
          <MoniteurImg
            as={motion.img}
            whileHover={{ y: "-30px" }}
            whileHover={{ y: "-30px" }}
            whileHover={{ y: "-40px" }}
            src={Moniteur}
          />
          <PcPortableImg
            as={motion.img}
            whileHover={{ x: "10px" }}
            src={PcPortable}
          />
          <TabeletteImg
            as={motion.img}
            initial={{ x: "150px" }}
            animate={{ x: "150px" }}
            whileHover={{ x: "140px" }}
            src={Tablette}
          />
          <TéléphoneImg
            as={motion.img}
            initial={{ x: "75px" }}
            animate={{ x: "75px" }}
            whileHover={{ x: "65px", scale: 1.1 }}
            src={Téléphone}
          />
        </ContentRightImgs>
        <StoreContainer>
          <StoreP>Télécharger l'application AVT</StoreP>
          <StoreIcones>
            <StoreIcone
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              src={AppStore}
            />
            <StoreIcone
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              src={PlayStore}
            />
          </StoreIcones>
        </StoreContainer>
      </ContentRightWrapper>
    </ContentRight>
  );
};

export default RightContainer;
