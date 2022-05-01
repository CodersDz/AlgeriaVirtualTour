import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  NavMobileWrapper,
  TopContainer,
  HumbergerContainer,
  HumbergerBtn,
  HumbergerIcone,
  LogoContainer,
  NavLogo,
  TopContainerLink,
  SearchContainer,
  SearchIcone,
  NotificationsContainer,
  NotificationsBtn,
  NotificationsIcone,
  BottomContainer,
  BottomItem,
  BottomLink,
  HomeIcone,
  AgendaIcone,
  TravelIcone,
  ProfileIcone,
} from "./NavbarMobileElements";
import { ReactComponent as LanguageIcone } from "../../../assets/svg/LanguageIcone.svg";
import ChooseLanguage from "../../../pages/ChooseLanguage/ChooseLanguage";
const NavbarMobile = ({ setOpen, resetCaroussel }) => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const location = useLocation();
  console.log(location);
  const currentPage = location.pathname.replace("/", "").toLowerCase();
  console.log(currentPage);
  return (
    <NavMobileWrapper>
      <TopContainer>
        <HumbergerContainer>
          <HumbergerBtn
            onClick={() => {
              setOpen(true);
            }}
          >
            <HumbergerIcone />
          </HumbergerBtn>
        </HumbergerContainer>
        <LogoContainer onClick={resetCaroussel}>
          <NavLogo />
        </LogoContainer>
        <SearchContainer>
          <TopContainerLink to="/search">
            <SearchIcone />
          </TopContainerLink>
        </SearchContainer>
        <NotificationsContainer>
          <NotificationsBtn
            onClick={() => {
              setOpenLanguage(true);
            }}
          >
            <LanguageIcone />
          </NotificationsBtn>
        </NotificationsContainer>
      </TopContainer>
      <BottomContainer>
        <BottomItem
          style={{
            borderBottom: `${
              currentPage === "home" ? "2px solid #fff" : "none"
            }`,
          }}
        >
          <BottomLink to="/home">
            <HomeIcone
              style={{
                fill: `${currentPage === "home" ? "#fff" : "#2F8100"}`,
              }}
            />
          </BottomLink>
        </BottomItem>
        <BottomItem
          style={{
            borderBottom: `${
              currentPage === "agenda" ? "2px solid #fff" : "none"
            }`,
          }}
        >
          <BottomLink to="/home">
            <AgendaIcone
              style={{
                fill: `${currentPage === "agenda" ? "#fff" : "#2F8100"}`,
              }}
            />
          </BottomLink>
        </BottomItem>
        <BottomItem
          style={{
            borderBottom: `${
              currentPage === "travel" ? "2px solid #fff" : "none"
            }`,
          }}
        >
          <BottomLink to="/home">
            <TravelIcone
              fill="#000"
              style={{
                marginTop: "-8px",
                fill: `${currentPage === "travel" ? "#fff" : "#2F8100"}`,
              }}
            />
          </BottomLink>
        </BottomItem>
        <BottomItem
          style={{
            borderBottom: `${
              currentPage === "profile" ? "2px solid #fff" : "none"
            }`,
          }}
        >
          <BottomLink to="/Profile">
            <ProfileIcone
              style={{
                fill: `${currentPage === "profile" ? "#fff" : "#2F8100"}`,
              }}
            />
          </BottomLink>
        </BottomItem>
      </BottomContainer>
      {openLanguage && <ChooseLanguage setOpenLanguage={setOpenLanguage} />}
    </NavMobileWrapper>
  );
};

export default NavbarMobile;
