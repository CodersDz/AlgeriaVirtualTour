import styled from "styled-components";

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 80%;
  min-height: 20%;
  max-height: 80%;
  background: #707070;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BtnContainer = styled.div`
  height: 35px;
  width: 100%;
  align-self: end;
`;
export const SearchBtn = styled.button`
  height: 100%;
  font-size: 12px;
  width: 30%;
  max-width: 100px;
  background-color: #4bcb02;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  color: #fff;
`;
