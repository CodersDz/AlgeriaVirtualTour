//-----------------React and hooks imports---------------
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation/useTranslation";
//-----------------Icons imports---------------
import { ReactComponent as NavLogo } from "../../assets/svg/NavLogo.svg";
import { ReactComponent as HomeIcone } from "../../assets/svg/HomeIcone.svg";
import { ReactComponent as HumbergerIcon } from "../../assets/svg/HumbergerIcon.svg";
import { ReactComponent as SearchIcone } from "../../assets/svg/SearchIcone.svg";
import { ReactComponent as AgendaIcone } from "../../assets/svg/AgendaIcone.svg";
import { ReactComponent as TravelIcone } from "../../assets/svg/TravelIcone.svg";
import { ReactComponent as ProfileIcone } from "../../assets/svg/ProfileIcone.svg";
import { ReactComponent as LanguageIcone } from "../../assets/svg/LanguageIcone.svg";

//-----------------Components imports---------------
import SelectLang from "../SelectLang/SelectLang";
//-----------------Elements imports---------------
//HiddenNav
import {
  RightNavContainer,
  RightNavDiv,
  TopUl,
  BottomUl,
  RightNavLink,
  RightNavText,
  ArrowSvg,
  RightNavAgenda,
  VisibleRightNavAgenda,
  HiddenUl,
  HiddenLi,
} from "./NavbarElements";
//MainNav
import { NavContainer, NavWrapper } from "./NavbarElements";
//LeftContainer
import {
  LeftContainer,
  LogoItem,
  NavSeparator,
  HumbergerItem,
  Logo,
  Home,
} from "./NavbarElements";
//SearchContainer
import { SearchContainer, SearchBtn } from "./NavbarElements";
//RightContainer
import {
  RightContainer,
  NavItem,
  NavLink,
  SearchSpan,
  NavLinkSpan,
} from "./NavbarElements";
const HiddenLiVariants = {
  initial: { y: -100 },
  animate: { y: 0, transition: { duration: 1 } },
};
const Navbar = ({ setAnimated }) => {
  let history = useHistory();
  const location = useLocation();
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const resetCaroussel = () => {
    if (location.pathname === "/home" || location.pathname === "/Home") {
      setAnimated([]);
    } else {
      history.push("/home");
    }
  };
  const closeBar = () => {
    setOpen(true);
  };
  const componentDidMount = () => {
    document.getElementById("rightNav").focus();
  };

  return (
    <NavContainer>
      <RightNavContainer
        id="rightNav"
        tabIndex="10"
        open={open}
        onBlur={() => {
          setOpen(false);
        }}
      >
        <RightNavDiv>
          <TopUl>
            <RightNavLink to="/Home">Profile</RightNavLink>
            <RightNavLink to="/Home">Article enregisté</RightNavLink>
            <RightNavAgenda>
              <VisibleRightNavAgenda>
                <span>Agenda</span>
                <ArrowSvg />
              </VisibleRightNavAgenda>
              <HiddenUl>
                <HiddenLi
                  as={motion.li}
                  variants={HiddenLiVariants}
                  initial="initial"
                  animate="animate"
                  to="/Home"
                >
                  événements culturels
                </HiddenLi>
                <HiddenLi
                  as={motion.li}
                  variants={HiddenLiVariants}
                  initial="initial"
                  animate="animate"
                  to="/Home"
                >
                  Agenda touristique
                </HiddenLi>
                <HiddenLi
                  as={motion.li}
                  variants={HiddenLiVariants}
                  initial="initial"
                  animate="animate"
                  to="/Home"
                >
                  Visite guidée
                </HiddenLi>
              </HiddenUl>
            </RightNavAgenda>
          </TopUl>
          <BottomUl>
            <RightNavLink to="/About">About Us</RightNavLink>
            <RightNavLink to="/Contact">Contact Us</RightNavLink>
            <RightNavLink to="/LegalNotice">Mentions légale</RightNavLink>
            <RightNavText>
              Tous les droits sont réservés <br />
              Virtuel Art Prod <br />
              2021
            </RightNavText>
          </BottomUl>
        </RightNavDiv>
      </RightNavContainer>
      <NavWrapper>
        <LeftContainer>
          <HumbergerItem>
            <HumbergerIcon
              size="36"
              onClick={() => {
                setOpen(true);
                componentDidMount();
              }}
            />
          </HumbergerItem>
          <LogoItem onClick={resetCaroussel}>
            <Home />
            <NavSeparator />
            <Logo />
          </LogoItem>
        </LeftContainer>
        <SearchContainer>
          <SearchBtn to="/Search">
            <SearchIcone size="24" color="#fff" />
            <SearchSpan>Recherchez</SearchSpan>
          </SearchBtn>
        </SearchContainer>
        <RightContainer>
          <NavItem>
            <NavLink to="/">
              <AgendaIcone />
              <NavLinkSpan>Agenda</NavLinkSpan>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Login">
              <TravelIcone />
              <NavLinkSpan>Voyage</NavLinkSpan>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Login">
              <ProfileIcone />
              <NavLinkSpan>Profile</NavLinkSpan>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Login">
              <LanguageIcone />
              <NavLinkSpan>Langue</NavLinkSpan>
            </NavLink>
          </NavItem>
        </RightContainer>
      </NavWrapper>
    </NavContainer>
  );
};
export default Navbar;
