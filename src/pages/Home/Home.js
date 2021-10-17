import React, { useState } from "react";
import { motion } from "framer-motion";
//-----------------Elements imports---------------
import { HeroContainer, HeroContent } from "./HomeElements";
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "./HomeBg.jpg";
//-----------------Variants animation---------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Home = () => {
  const [currentBg, setCurrentBg] = useState(HomeBg);
  return (
    <div>
      <HeroContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        currentBg={currentBg}
      >
        <Navbar />
        <HeroContent>
          <HomeCarousel
            setCurrentBg={setCurrentBg}
            bg={currentBg}
          ></HomeCarousel>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Home;
