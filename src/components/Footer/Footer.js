import React from "react";
import {
  FooterContainer,
  FooterElements,
  FooterWrapper,
  FooterElement,
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterElements>
          <NavLogo style={{ alignSelf: "flex-start" }} />
          <FooterP>
            L'utilisation de ce site Internet implique l'acceptation des
            Conditions générales et du règlement sur le Respect de la vie
            privée.
          </FooterP>
        </FooterElements>
        <FooterElements>
          <FooterElement>
            <FooterElementIcone>
              <StoreIcone />
            </FooterElementIcone>

            <FooterElementTitle>
              Store de Algeria Virtuel Tour
            </FooterElementTitle>
          </FooterElement>
          <FooterElement>
            <FooterElementIcone>
              <PubIcone />
            </FooterElementIcone>

            <FooterElementTitle>
              Pubilicité sur Algeria Virtuel Tour
            </FooterElementTitle>
          </FooterElement>
          <FooterElement>
            <FooterElementIcone>
              <InfoIcone />
            </FooterElementIcone>

            <FooterElementTitle>Motions légales</FooterElementTitle>
          </FooterElement>
        </FooterElements>
        <FooterElements>
          <FooterElement>
            <FooterElementIcone>
              <ContactIcone />
            </FooterElementIcone>

            <FooterElementTitle>Contactez nous</FooterElementTitle>
          </FooterElement>
          <FooterElement>
            <FooterElementIcone>
              <SiteIcone />
            </FooterElementIcone>

            <FooterElementTitle>www.virtuelart.com</FooterElementTitle>
          </FooterElement>
          <FooterElement>
            <FooterElementIcone>
              <FacebookIcone />
            </FooterElementIcone>

            <FooterElementIcone>
              <InstagramIcone />
            </FooterElementIcone>

            <FooterElementIcone>
              <YoutubeIcone />
            </FooterElementIcone>

            <FooterElementIcone>
              <TwitterIcone />
            </FooterElementIcone>
          </FooterElement>
        </FooterElements>
        <FooterElements>
          <FooterElement>
            <FooterElementIcone>
              <PhoneIcone />
            </FooterElementIcone>

            <FooterElementTitle>
              +213 550 129 119 | +213 0774 816 951
            </FooterElementTitle>
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
