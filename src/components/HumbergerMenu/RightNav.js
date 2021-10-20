import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightNavContainer = styled.div`
  background: rgba(0, 0, 0, 0.73);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 400px;
  padding-top: 3.5rem;
  z-index: 4;
  transition: transform 0.3s ease-in-out;
  Link {
    padding: 18px 10px;
    color: #fff;
  }
`;
const RightNavUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;
const RightNav = ({ open }) => {
  return (
    <RightNavContainer open={open}>
      <RightNavUl>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
      </RightNavUl>
    </RightNavContainer>
  );
};

export default RightNav;
