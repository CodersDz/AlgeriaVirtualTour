import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
//-----------------Elements imports---------------

import { ReactComponent as NavLogo } from "../../assets/svg/NavLogo.svg";
import { ReactComponent as HomeIcone } from "../../assets/svg/HomeIcone.svg";
//Responsive stuff
import device from "../../assets/Variables/responsive";
const lang = localStorage.getItem("language");
//KeyFrames
const showLi = keyframes`
  0% {
    transform:translateY(-100%);
    opacity:0;
}
  100% {
    transform:translateY(0);
    opacity:1;
    }
`;
//HiddenNav
export const RightNavContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  position: fixed;
  border: none;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 450px;
  max-width: 100vw;
  padding: 3.5rem;
  z-index: 7;
  transition: transform 0.3s ease-in-out;
  Link {
    padding: 18px 10px;
    color: #fff;
  }
`;
export const RightNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

export const TopUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 65%;
  width: 100%;
  border-bottom: solid 1px #b3b3b3;
`;
export const BottomUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  height: 35%;
  width: 100%;
`;
export const RightNavAgenda = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  display: none;
`;
export const RightNavText = styled.div`
  padding: 20px 0 0 0;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
`;

export const HiddenUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
`;

export const VisibleRightNavAgenda = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RightNavLink = styled(Link)`
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;

  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 20px;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const HiddenLi = styled(RightNavLink)`
  display: none;
  animation: ${showLi} 0.5s ease-in-out;

  ${RightNavAgenda}:hover & {
    display: block;
  }
`;
export const ArrowSvg = styled(Arrow)`
  transition: all 0.3s ease-out;
  ${RightNavAgenda}:hover & {
    transform: rotate(-180deg);
  }
`;
//MainNav
export const NavContainer = styled.nav`
  padding: ${(props) => (props.isDesktop ? "1rem" : "0px")};
  color: #fff;
  width: 100vw;
  font-size: 18px;
  font-weight: 400;
  position: fixed;
  top: 1px;
  margin-top: -1px;
  z-index: 7;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.maxTablet} {
  }
  @media only screen and ${device.laptop} {
    background-color: #00c22a;
    height: 80px;
  }
  @media only screen and ${device.desktop} {
    height: 110px;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    padding: 0 0 0 25px;
  }
  @media only screen and ${device.desktop} {
    padding: 0 50px 0 50px;
  }
`;
//LeftContainer
export const LeftContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
  }
  @media only screen and ${device.desktop} {
  }
`;
export const Logo = styled(NavLogo)`
  max-width: 70%;
  max-height: 100%;
`;
export const NavSeparator = styled.div`
  width: 2px;
  height: 70%;
  background-color: #fff;
  display: none;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    display: block;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const Home = styled(HomeIcone)`
  display: none;
  max-height: 100%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    display: block;
  }
`;
export const HumbergerItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
`;
export const LogoItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100%;
`;
//SearchContainer
export const SearchContainer = styled.div`
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  display: none;
  width: 50%;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    display: flex;
  }
  @media only screen and ${device.desktop} {
  }
`;
export const SearchBtn = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10rem;
  padding: 0px 20px;
  width: 30%;
  position: absolute;
  right: 0;
  transition: width 200ms ease-in-out;
  transition-timing-function: linear;
  &:hover {
    width: 90%;
  }
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    height: 100%;
  }
  @media only screen and ${device.desktop} {
    height: 80%;
  }
`;
export const SearchSpan = styled.span`
  font-weight: 400;
  margin-left: ${lang === '"ar"' ? "0" : "10px"};
  margin-right: ${lang === '"ar"' ? "10px" : "0"};
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 12px;
  }
  @media only screen and ${device.desktop} {
    font-size: 15px;
  }
`;
//RightContainer
export const RightContainer = styled.ul`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: none;
  position: relative;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    display: flex;
  }
`;

export const NavItem = styled.li`
  width: 25%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    border-radius: 20px;
  }
  &:hover {
    &::after {
      transform: scaleY(1);
    }
  }
`;

export const NavLang = styled.div`
  cursor: pointer;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    border-radius: 20px;
  }
  &:hover {
    &::after {
      transform: scaleY(1);
    }
  }
`;
export const NavLinkSpan = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #fff;
`;
export const NavLangSpan = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #fff;
`;
