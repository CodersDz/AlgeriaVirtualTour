import React from "react";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import {
  ContentContainer,
  LeftContainer,
  LeftWrapper,
  AboutH1,
  AboutP,
  RightContainer,
} from "./AboutElements";

import { PageContentGlobal } from "../../GlobalStyles";
const About = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default About;
