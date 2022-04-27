//-----------------React and hooks imports---------------
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
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
import useWindowSize from "../../hooks/useWindowSize";
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
  NavLang,
  NavLangSpan,
  RightNavBtn,
} from "./NavbarElements";
//MainNav
import { NavContainer, NavWrapper } from "./NavbarElements";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
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
import { useDispatch } from "react-redux";
import { resetAnimated } from "../../features/animation/animatedHomeSlice";
const HiddenLiVariants = {
  initial: { y: -100 },
  animate: { y: 0, transition: { duration: 1 } },
};
const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  const isMobileMap = location.pathname.toLowerCase() === "/map";
  const isDesktop = useWindowSize();
  console.log(!isDesktop && isMobileMap);
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const resetCaroussel = () => {
    console.log(location.pathname.toLowerCase());
    if (location.pathname.toLowerCase() !== "/home") {
      navigate("/home");
    }
    dispatch(resetAnimated());
  };
  const componentDidMount = () => {
    document.getElementById("rightNav").focus();
  };

  return (
    <NavContainer isMobileMap={!isDesktop && isMobileMap} isDesktop={isDesktop}>
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
            {!isDesktop && (
              <RightNavBtn
                onClick={() => {
                  setOpen(false);
                }}
              >
                x
              </RightNavBtn>
            )}
            <RightNavLink
              to="/Home"
              onClick={(event) => event.preventDefault()}
            >
              {t("NavBar.Profile")}
            </RightNavLink>
            <RightNavLink
              to="/Home"
              onClick={(event) => event.preventDefault()}
            >
              {t("NavBar.Saved_items")}
            </RightNavLink>
            <RightNavAgenda>
              <VisibleRightNavAgenda>
                <span>{t("NavBar.Agenda")}</span>
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
            <RightNavLink to="/About">{t("NavBar.About_us")}</RightNavLink>
            <RightNavLink to="/Contact">{t("NavBar.Contact_us")}</RightNavLink>
            <RightNavLink to="/LegalNotice">
              {t("NavBar.Legal_Notice")}
            </RightNavLink>
            <RightNavText>
              {t("NavBar.All_rights_reserved")} <br />
              Virtual Art Production <br />
              2022
            </RightNavText>
          </BottomUl>
        </RightNavDiv>
      </RightNavContainer>
      {isDesktop ? (
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
              <SearchSpan>{t("NavBar.Research")}</SearchSpan>
            </SearchBtn>
          </SearchContainer>
          <RightContainer>
            <NavItem>
              <NavLink to="/" onClick={(event) => event.preventDefault()}>
                <AgendaIcone style={{ maxWidth: "100%", maxHeight: "80%" }} />
                <NavLinkSpan>{t("NavBar.Agenda")}</NavLinkSpan>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={(event) => event.preventDefault()}>
                <TravelIcone
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    marginTop: "-8px",
                  }}
                />
                <NavLinkSpan>{t("NavBar.Travel")}</NavLinkSpan>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Profile">
                <ProfileIcone style={{ maxWidth: "100%", maxHeight: "80%" }} />
                <NavLinkSpan>{t("NavBar.Profile")}</NavLinkSpan>
              </NavLink>
            </NavItem>
            <NavItem
              onClick={() => {
                setLangOpen(!langOpen);
              }}
            >
              <NavLang>
                <LanguageIcone style={{ maxWidth: "100%", maxHeight: "80%" }} />
                <NavLangSpan>{t("NavBar.Language")}</NavLangSpan>
              </NavLang>
            </NavItem>
            <SelectLang langOpen={langOpen} />
          </RightContainer>
        </NavWrapper>
      ) : (
        <NavbarMobile setOpen={setOpen} resetCaroussel={resetCaroussel} />
      )}
    </NavContainer>
  );
};
export default Navbar;
