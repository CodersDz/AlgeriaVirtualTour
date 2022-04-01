import React from "react";
import { useEffect } from "react";
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

const NavbarMobile = ({ setOpen }) => {
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "");
  console.log(currentPage);
  useEffect(() => {
    switch (location.pathname) {
      case "/home":
    }
  }, []);
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
        <LogoContainer>
          <TopContainerLink to="/home">
            <NavLogo />
          </TopContainerLink>
        </LogoContainer>
        <SearchContainer>
          <TopContainerLink to="/search">
            <SearchIcone />
          </TopContainerLink>
        </SearchContainer>
        <NotificationsContainer>
          <NotificationsBtn>
            <NotificationsIcone />
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
          <BottomLink>
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
          <BottomLink>
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
          <BottomLink to="/login">
            <ProfileIcone
              style={{
                fill: `${currentPage === "profile" ? "#fff" : "#2F8100"}`,
              }}
            />
          </BottomLink>
        </BottomItem>
      </BottomContainer>
    </NavMobileWrapper>
  );
};

export default NavbarMobile;
