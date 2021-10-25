import styled from "styled-components";
import { Link } from "react-router-dom";

//-----------------Elements imports---------------
import { Container } from "../../GlobalStyles";

export const NavContainer = styled.nav`
  background-color: transparent;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding: 1rem;
  top: 1rem;
  position: relative;
  z-index: 3;
  background-color: transparent;
  width: 100%;
`;
export const NavWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-weight: 700;
  @media screen and (max-width: 991px) {
    justify-content: center;
  }
  ${Container};
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
  font-size: 18px;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
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
  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;
export const SearchBtn = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  background-color: transparent;
  border-radius: 10rem;
  padding: 10px 10px;
  width: 3rem;
  transition: width 500ms;

  &:hover {
    width: 15rem;
    background-color: rgba(255, 255, 255, 0.36);
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;
  font-weight: 500;
  cursor: pointer;
`;
export const NavImg = styled.img``;
