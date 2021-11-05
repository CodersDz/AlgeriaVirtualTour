import React from "react";
import { motion } from "framer-motion";
import RightContainer from "../../components/RightContainer/RightContainer";
import {
  ContactPageContainer,
  AboutContentContainer,
  AboutContentLeft,
  AboutContentLeftWrapper,
  AboutH1,
  AboutP,
} from "./AboutElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <ContactPageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <Navbar />
      <AboutContentContainer>
        <AboutContentLeft>
          <AboutContentLeftWrapper>
            <AboutH1>À Propos</AboutH1>
            <AboutP>
              AVT c'est un site et une applications de tourisme virtuelle en
              Algérie fondé le 15 Décembre 2020 par VIRTUEL ART PRODUCTION, où
              vous trouvez plus de 140 lieux en 360° et 250 photos et vidéos, et
              une agenda spécial qui contienne des éventements touristiques,
              artistiques et culturelles fournis par des agences de voyages et
              des organisations et associations.
            </AboutP>
          </AboutContentLeftWrapper>
        </AboutContentLeft>
        <RightContainer />
      </AboutContentContainer>
      <Footer />
    </ContactPageContainer>
  );
};

export default About;
