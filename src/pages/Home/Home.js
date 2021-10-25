import React, { useState } from "react";
import { motion } from "framer-motion";
//-----------------Elements imports---------------
import { HomeContainer, HomeContent } from "./HomeElements";
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "./HomeBg.jpg";
//-----------------Variants animation---------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  const [currentBg, setCurrentBg] = useState(HomeBg);
  return (
    <HomeContainer
      key="home"
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      currentBg={currentBg}
    >
      <Navbar />
      <HomeContent>
        <HomeCarousel setCurrentBg={setCurrentBg} bg={currentBg}></HomeCarousel>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
