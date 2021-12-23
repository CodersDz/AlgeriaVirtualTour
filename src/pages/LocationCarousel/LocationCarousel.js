import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PageContainer,
  PageContent,
  LeftContainer,
  LeftWrapper,
  ContentContainer,
  LocationName,
  LocationP,
  BtnContainer,
  ReadMoreBtn,
  Visit360Btn,
  RightContainer,
  RightWrapper,
  ArrowsContainer,
} from "./LocationCarouselElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Alger from "./Alger.jpg";
import Bejaia from "./Bejaia.jpg";
import Djanet from "./Djanet.jpeg";
import Ghardaia from "./Ghardaia.jpg";

import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as RightArrow } from "./RightArrow.svg";
import axios from "axios";
const Photos = [Alger, Bejaia, Djanet, Ghardaia];
const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const LocationCarousel = (props) => {
  const [readMore, setReadMore] = useState(false);
  const [destination, setDestination] = useState(false);
  useEffect(() => {
    if (props.location.state) {
      setDestination(props.location.state.destination);
    } else {
    }
  }, []);
  console.log(
    `http://www.algeriavirtualtour.com/uploads/tours/Bastion/index.htm`
  );
  const [index, setIndex] = useState(0);
  const goLeft = () => {
    if (Photos.length !== 1) {
      if (index - 1 >= 0) {
        setIndex(index - 1);
      } else {
        setIndex(Photos.length - 1);
      }
    }
  };
  const goRight = () => {
    if (Photos.length !== 1) {
      if (index + 1 <= Photos.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  };
  return (
    <PageContainer currentBg={Photos[index]}>
      <Navbar />
      <PageContent>
        <LeftContainer>
          <LeftWrapper>
            <ContentContainer>
              <LocationName>{destination.name}</LocationName>
              <LocationP readMore={readMore}>
                {destination.description}
              </LocationP>

              <BtnContainer>
                <ReadMoreBtn
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {!readMore && (
                    <motion.span variants={BtnVariants} animate="animate">
                      Lire la suite
                    </motion.span>
                  )}
                  {readMore && (
                    <motion.span
                      variants={BtnVariants}
                      initial="initial"
                      animate="animate"
                    >
                      Moins
                    </motion.span>
                  )}
                </ReadMoreBtn>
                <Visit360Btn
                  href={`http://www.algeriavirtualtour.com/uploads/tours/Bastion/index.htm`}
                >
                  Visite En 360°
                </Visit360Btn>
              </BtnContainer>
            </ContentContainer>
          </LeftWrapper>
        </LeftContainer>
        <RightContainer>
          <RightWrapper>
            <ArrowsContainer>
              <LeftArrow onClick={goLeft} />
              <RightArrow onClick={goRight} />
            </ArrowsContainer>
          </RightWrapper>
        </RightContainer>
      </PageContent>
      <Footer />
    </PageContainer>
  );
};

export default LocationCarousel;
