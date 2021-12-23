import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
//-----------------Elements imports---------------
import { Container } from "../../GlobalStyles";
import { ReactComponent as NavLogo } from "../../assets/svg/NavLogo.svg";
import { ReactComponent as HomeIcone } from "../../assets/svg/HomeIcone.svg";
//Responsive stuff
import device from "../../assets/Variables/responsive";
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
  padding: 3.5rem;
  z-index: 4;
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
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 100%;
  border-bottom: solid 1px #b3b3b3;
`;
export const BottomUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 25%;
  width: 100%;
`;
export const RightNavAgenda = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
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
  padding: 10px;
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RightNavLink = styled(Link)`
  padding: 10px;
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export const SearchLink = styled(RightNavLink)``;
//MainNav
export const NavContainer = styled.nav`
  color: #fff;
  height: 110px;
  width: 100vw;
  font-size: 18px;
  font-weight: 400;
  padding: 1rem;
  position: fixed;
  top: 1px;
  margin-top: -1px;
  z-index: 3;
  background-color: #00c22a;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Container};
`;
//LeftContainer
export const LeftContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    width: 30%;
  }
`;
export const Logo = styled(NavLogo)``;
export const NavSeparator = styled.div`
  width: 2px;
  height: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 50%;
  display: none;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    display: inline;
  }
`;
export const SearchBtn = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10rem;
  padding: 0px 20px;
  width: 12rem;
  height: 80%;
  width: 30%;
  position: absolute;
  right: 0;
  transition: width 200ms ease-in-out;
  transition-timing-function: linear;
  &:hover {
    width: 90%;
  }
`;
export const SearchSpan = styled.span`
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
`;
//RightContainer
export const RightContainer = styled.ul`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: none;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.laptop} {
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;
  width: 25%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 15px;
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
  opacity: 0;
  font-size: 10px;
  font-weight: 400;
  color: #fff;

  ${NavLink}:hover & {
    opacity: 1;
  }
`;
