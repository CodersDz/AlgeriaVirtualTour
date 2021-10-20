import React from "react";
import {
  FooterContainer,
  FooterElements,
  FooterWrapper,
  FooterA,
} from "./FooterElements";
import { FaVimeo, FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrYoutube, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterElements>E-mail: contact@virtuelart.com</FooterElements>
        <FooterElements>Mobile: +213 (00)123456789</FooterElements>
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
