import React, { useState } from "react";
import { motion } from "framer-motion";
//-----------------Elements imports---------------
import { HeroContainer, HeroContent } from "./HomeElements";
//-----------------Components imports---------------
import Navbar from "../../components/Navbar/Navbar";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
//-----------------Images imports---------------
import { ReactComponent as DzMap } from "../../assets/svg/DzMap.svg";
import HomeBg from "../../assets/Images/HomeBg.jpg";
const Home = () => {
  const [currentBg, setCurrentBg] = useState(HomeBg);
  return (
    <div>
      <HeroContainer currentBg={currentBg} style={{}}>
        <Navbar />
        <HeroContent>
          <HomeCarousel setCurrentBg={setCurrentBg}></HomeCarousel>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Home;
