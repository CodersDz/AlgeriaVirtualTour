import React from "react";
import {
  FooterContainer,
  FooterElements,
  FooterWrapper,
  FooterElement,
  FooterElementLink,
  FooterElementTitle,
  FooterP,
  FooterElementIcone,
} from "./FooterElements";
import { ReactComponent as NavLogo } from "../../assets/svg/NavLogo.svg";
import { ReactComponent as InstagramIcone } from "../../assets/svg/InstagramIcone.svg";
import { ReactComponent as MailIcone } from "../../assets/svg/MailIcone.svg";
import { ReactComponent as PhoneIcone } from "../../assets/svg/PhoneIcone.svg";
import { ReactComponent as PositionIcone } from "../../assets/svg/PositionIcone.svg";
import { ReactComponent as SiteIcone } from "../../assets/svg/SiteIcone.svg";
import { ReactComponent as YoutubeIcone } from "../../assets/svg/YoutubeIcone.svg";
import { ReactComponent as ContactIcone } from "../../assets/svg/ContactIcone.svg";
import { ReactComponent as PubIcone } from "../../assets/svg/PubIcone.svg";
import { ReactComponent as InfoIcone } from "../../assets/svg/InfoIcone.svg";
import { ReactComponent as StoreIcone } from "../../assets/svg/StoreIcone.svg";
import { ReactComponent as FacebookIcone } from "../../assets/svg/FacebookIcone.svg";
import { ReactComponent as TwitterIcone } from "../../assets/svg/TwitterIcone.svg";
import { ReactComponent as LinkedInIcone } from "../../assets/svg/LinkedInIcone.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterElements>
          <NavLogo style={{ maxWidth: "100% " }} />
          <FooterP>
            L'utilisation de ce site Internet implique l'acceptation des
            Conditions générales et du règlement sur le Respect de la vie
            privée.
          </FooterP>
        </FooterElements>
        <FooterElements>
          <FooterElementLink to="/Store">
            <FooterElementIcone>
              <StoreIcone />
            </FooterElementIcone>
            <FooterElementTitle>
              Store de Algeria Virtuel Tour
            </FooterElementTitle>
          </FooterElementLink>
          <FooterElementLink to="/Pub">
            <FooterElementIcone>
              <PubIcone />
            </FooterElementIcone>
            <FooterElementTitle>
              Pubilicité sur Algeria Virtuel Tour
            </FooterElementTitle>
          </FooterElementLink>
          <FooterElementLink to="/LegalNotice">
            <FooterElementIcone>
              <InfoIcone />
            </FooterElementIcone>
            <FooterElementTitle>Montions légales</FooterElementTitle>
          </FooterElementLink>
        </FooterElements>
        <FooterElements>
          <FooterElementLink to="/Contact">
            <FooterElementIcone>
              <ContactIcone />
            </FooterElementIcone>
            <FooterElementTitle>Contactez nous</FooterElementTitle>
          </FooterElementLink>
          <FooterElementLink to="/">
            <FooterElementIcone>
              <SiteIcone />
            </FooterElementIcone>
            <FooterElementTitle>www.virtuelart.com</FooterElementTitle>
          </FooterElementLink>
          <FooterElement>
            <FooterElementIcone
              href="https://www.facebook.com/Algeria.Travel.Guide"
              target="_blank"
            >
              <FacebookIcone />
            </FooterElementIcone>
            <FooterElementIcone
              href="https://www.instagram.com/algeria_virtual_tour"
              target="_blank"
            >
              <InstagramIcone />
            </FooterElementIcone>
            <FooterElementIcone
              href="https://youtube.com/channel/UCpu5hxyNQq0bl8A0-b-zpJw"
              target="_blank"
            >
              <YoutubeIcone />
            </FooterElementIcone>
            <FooterElementIcone
              href="https://www.linkedin.com/in/algeria-virtualtour"
              target="_blank"
            >
              <LinkedInIcone />
            </FooterElementIcone>
          </FooterElement>
        </FooterElements>
        <FooterElements>
          <FooterElement>
            <FooterElementIcone>
              <PhoneIcone />
            </FooterElementIcone>

            <FooterElementTitle>+213 550 129 119</FooterElementTitle>
          </FooterElement>
          <FooterElement>
            <FooterElementIcone>
              <MailIcone />
            </FooterElementIcone>
            <FooterElementTitle>
              contact@algeriavirtueltour.com
            </FooterElementTitle>
          </FooterElement>
          <FooterElement>
            <FooterElementIcone>
              <PositionIcone />
            </FooterElementIcone>

            <FooterElementTitle>
              Cité Ennour - Beni Messous, Alger
            </FooterElementTitle>
          </FooterElement>
        </FooterElements>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
