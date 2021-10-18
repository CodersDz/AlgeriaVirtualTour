//-----------------React and hooks imports---------------
import React, { useState, useRef, useEffect } from "react";
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
} from "./NavbarElements";

const Navbar = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  return (
    <div>
      <NavContainer>
        <NavWrapper>
          <LeftContainer>
            <NavItem>
              <HumbergerIcon size="36" />
            </NavItem>
            <NavItem>
              <NavLink to="/Home">
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
