import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Wrapper,
  Imgs,
  MoniteurImg,
  PcPortableImg,
  TéléphoneImg,
  TabeletteImg,
  StoreContainer,
  StoreP,
  StoreIcones,
  StoreIcone,
} from "./DevicesContainerElements";

import AppStore from "./AppStore.png";
import PlayStore from "./PlayStore.png";

const DevicesContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Imgs>
          <MoniteurImg
            as={motion.img}
            whileHover={{ y: "-30px" }}
            whileHover={{ y: "-30px" }}
            whileHover={{ y: "-40px" }}
          />
          <PcPortableImg as={motion.img} whileHover={{ x: "10px" }} />
          <TabeletteImg
            as={motion.img}
            initial={{ x: "150px" }}
            animate={{ x: "150px" }}
            whileHover={{ x: "140px" }}
          />
          <TéléphoneImg
            as={motion.img}
            initial={{ x: "75px" }}
            animate={{ x: "75px" }}
            whileHover={{ x: "65px", scale: 1.1 }}
          />
        </Imgs>
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
      </Wrapper>
    </Container>
  );
};

export default DevicesContainer;
