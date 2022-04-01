import React from "react";
import { motion } from "framer-motion";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  PageContainer,
  ContentContainer,
  LeftContainer,
  LeftWrapper,
  AboutH1,
  AboutP,
  RightContainer,
} from "./AboutElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SidePopUpBar from "../../components/SidePopUpBar/SidePopUpBar";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
const About = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <PageContainerGlobal
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <Navbar />
      <PageContentGlobal fixed={false}>
        <ContentContainer>
          <LeftContainer>
            <LeftWrapper>
              <AboutH1>{t("About_us_page.Title")}</AboutH1>
              <AboutP>
                <span style={{ fontWeight: 700 }}>ALGERIA VIRTUAL TOUR</span>
                <br />
                {t("AboutUsPage.text")}
              </AboutP>
            </LeftWrapper>
          </LeftContainer>
          <RightContainer>
            <DevicesContainer />
          </RightContainer>
        </ContentContainer>
      </PageContentGlobal>
      <Footer />
    </PageContainerGlobal>
  );
};

export default About;
