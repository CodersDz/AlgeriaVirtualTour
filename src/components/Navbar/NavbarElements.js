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
  top: 1px;
  position: relative;
  background-color: transparent;
  width: 100%;
  z-index: 3;
`;
export const NavWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 991px) {
    justify-content: center;
  }
  ${Container};
  font-weight: 400;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 15px;
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
export const RightNavLink = styled(Link)`
  padding: 10px;
  width: 100%;
  text-align: start;
  font-size: 1.2rem;
`;
export const RightNavText = styled.div`
  padding: 20px 0 0 0;
  color: #fff;
  font-size: 0.9rem;
`;
