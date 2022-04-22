import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4)
  );
  background-color: #36ab13;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GoBack = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 30px;
  left: 30px;
`;
