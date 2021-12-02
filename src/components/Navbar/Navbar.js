//-----------------React and hooks imports---------------
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation/useTranslation";
//-----------------Icons imports---------------
import { FaSearch } from "react-icons/fa";
import NavLogo from "../../assets/Images/NavLogo.png";
import { ReactComponent as HumbergerIcon } from "../../assets/svg/HumbergerIcon.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
//-----------------Components imports---------------
import SelectLang from "../SelectLang/SelectLang";
//-----------------Elements imports---------------
import {
  NavWrapper,
  NavContainer,
  NavLink,
  LeftContainer,
  RightContainer,
  SearchBtn,
  NavItem,
  NavImg,
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
          <NavItem>
            <HumbergerIcon
              size="36"
              onClick={() => {
                setOpen(true);
                componentDidMount();
              }}
            />
          </NavItem>
          <NavItem>
            <NavImg src={NavLogo} onClick={resetCaroussel} />
          </NavItem>
        </LeftContainer>

        <RightContainer>
          <NavItem>
            <NavLink to="/">{t("Nav.Agenda")}</NavLink>
          </NavItem>
          <NavItem>
            <SearchBtn to="/Search">
              <FaSearch size="24" color="#fff" />
            </SearchBtn>
          </NavItem>
          <NavItem>
            <NavLink to="/Login">{t("Nav.Login")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Login">{t("Nav.Register")}</NavLink>
          </NavItem>

          <NavItem>
            <SelectLang />
          </NavItem>
        </RightContainer>
      </NavWrapper>
    </NavContainer>
  );
};
export default Navbar;
