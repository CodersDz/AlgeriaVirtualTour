//-----------------React and hooks imports---------------
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation/useTranslation";
//-----------------Icons imports---------------
import { FaSearch } from "react-icons/fa";
import NavLogo from "../../assets/Images/NavLogo.png";
import { ReactComponent as HumbergerIcon } from "../../assets/svg/HumbergerIcon.svg";
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
} from "./NavbarElements";

const Navbar = ({ setAnimated }) => {
  const location = useLocation();
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const resetCaroussel = () => {
    if (location.pathname === "/Home") {
      setAnimated([]);
    }
  };
  const closeBar = () => {
    setOpen(true);
  };

  return (
    <div>
      <NavContainer>
        <RightNavContainer
          open={open}
          onFocus={() => {
            console.log("main", "focus");
          }}
          onBlur={() => {
            console.log("main", "blur");
          }}
        >
          <RightNavDiv>
            <TopUl>
              <button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Click{" "}
              </button>
              <RightNavLink to="/Home">Profile</RightNavLink>
              <RightNavLink to="/Home">Article enregisté</RightNavLink>
              <RightNavLink to="/Home">Agenda</RightNavLink>
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
                }}
              />
            </NavItem>
            <NavItem>
              <NavLink to="/Home" onClick={resetCaroussel}>
                <NavImg src={NavLogo} />
              </NavLink>
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
    </div>
  );
};
export default Navbar;
