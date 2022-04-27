import styled, { keyframes } from "styled-components";
import { useLocalStorage } from "../../../../hooks/useStorage";
const lang = localStorage.getItem("language");
const MenuAnimation = keyframes`
from {
  height:0px;
}

to {
  height:auto;
}
`;
export const Container = styled.div`
  height: 120px;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const GoBackContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchContainer = styled.div`
  min-height: 60px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  position: relative;
  overflow: auto;
`;
export const SearchWrapper = styled.div`
  min-height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  justify-content: space-between;
`;
export const IconeContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 13px;
  &::placeholder {
    color: #e7e7e7;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
`;
export const DeleteContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HiddenUl = styled.ul`
  width: 100%;
  max-height: 150px;
  display: ${(props) => (props.$display ? "flex" : "none")};
  animation: ${MenuAnimation} 0.3s forwards;
  flex-direction: column;
  justify-content: start;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
`;
export const HiddenLi = styled.li`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
`;
