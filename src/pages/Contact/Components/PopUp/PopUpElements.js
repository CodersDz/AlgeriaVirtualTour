import styled from "styled-components";
export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5vh;
  background-color: #00c22a;
  padding: 20px 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.type === 1 ? "#00c22a" : "#8B0000")};
  z-index: 5;
`;
export const TextSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
`;
