import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
//-----------------Elements imports---------------
import { Container } from "../../GlobalStyles";

export const NavContainer = styled.nav`
  color: #fff;
  height: 150px;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  padding: 1rem;
  position: relative;
  top: 1px;
  margin-top: -1px;
  z-index: 3;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`;
export const NavWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Container};
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 15px;
`;
export const LeftContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RightContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SearchBtn = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  background-color: transparent;
  border-radius: 10rem;
  padding: 10px 10px;
  width: 12rem;
  transition: background-color 300ms ease-in-out;
  transition-timing-function: linear;
  &:hover {
    background-color: rgba(255, 255, 255, 0.36);
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;
export const NavItemSearch = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;
export const NavImg = styled.img``;

export const RightNavContainer = styled.div`
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  position: fixed;
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
  list-style: none;
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
export const ArrowSvg = styled(Arrow)``;
export const RightNavLink = styled(Link)`
  padding: 10px;
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover ${ArrowSvg} {
    transform: rotate(180deg);
    transition: all 0.3s ease-out;
  }
`;
export const SearchLink = styled(RightNavLink)``;
export const RightNavText = styled.div`
  padding: 20px 0 0 0;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
`;
