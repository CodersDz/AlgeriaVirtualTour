import React from "react";
import {
  FooterContainer,
  FooterElements,
  FooterWrapper,
  FooterElementsImportantText,
  FooterElementsText,
  FooterA,
} from "./FooterElements";
import { FaVimeo, FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrYoutube, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterElements>
          <FooterElementsImportantText>E-mail:</FooterElementsImportantText>
          <FooterElementsText>contact@virtualart.com</FooterElementsText>
        </FooterElements>
        <FooterElements>
          <FooterElementsImportantText>Mobile:</FooterElementsImportantText>
          <FooterElementsText>+213 (00)123456789</FooterElementsText>
        </FooterElements>
        <FooterElements>
          <FooterA href="http://google.com">
            <FiInstagram />
          </FooterA>
          <FooterA>
            <FaFacebookSquare />
          </FooterA>
          <FooterA>
            <GrYoutube />
          </FooterA>
          <FooterA>
            <GrTwitter />
          </FooterA>
          <FooterA>
            <FaVimeo />
          </FooterA>
        </FooterElements>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
