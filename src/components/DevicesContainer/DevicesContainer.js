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
import useTranslation from "../../hooks/useTranslation/useTranslation";
import AppStore from "./AppStore.png";
import PlayStore from "./PlayStore.png";
import Moniteur from "./Moniteur.png";
import PcPortable from "./PcPortable.png";
import Tablette from "./Tablette.png";
import Téléphone from "./Téléphone.png";

const DevicesContainer = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Imgs>
          <MoniteurImg
            as={motion.img}
            whileHover={{ y: "-40px" }}
            src={Moniteur}
          />
          <PcPortableImg
            as={motion.img}
            whileHover={{ x: "-10px" }}
            src={PcPortable}
          />
          <TabeletteImg
            as={motion.img}
            whileHover={{ x: "-10px" }}
            src={Tablette}
          />
          <TéléphoneImg
            as={motion.img}
            whileHover={{ x: "-10px", scale: 1.1 }}
            src={Téléphone}
          />
        </Imgs>
        <StoreContainer>
          <StoreP>{t("DevicesContainer.Download")}</StoreP>
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
