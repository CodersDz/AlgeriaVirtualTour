import styled, { keyframes } from "styled-components";
const MenuAnimation = keyframes`
from {
  height:0px;
}

to {
  height:150px;
}
`;
export const BackDrop = styled.div`
  margin-top: 110px;
  width: 100vw;
  height: calc(100vh - 110px);
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
  height: 20%;
  height: 80%;
  background: #707070;
  border-radius: 30px;
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const WilayaTextContainer = styled.div`
  width: 100%;
  height: 10%;
`;
export const WilayaText = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
`;
export const BtnContainer = styled.div`
  height: 35px;
  width: 100%;
  align-self: end;
`;
export const SearchBtn = styled.button`
  height: 100%;
  font-size: 12px;
  font-weight: 600;
  width: 30%;
  max-width: 100px;
  background-color: #4bcb02;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  color: #fff;
`;
export const SelectWilayaContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow-y: visible;
`;
export const SelectWilayaVisible = styled.div`
  width: 100%;
  height: 20%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: ${(props) =>
    props.showWilayas === false ? "30px" : "30px 30px 0 0 "};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;
export const WilayaSelectedH3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;
export const SelectWilayaUlHidden = styled.ul`
  display: ${(props) => (props.showWilayas === false ? "none" : "flex")};
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 80%;
  animation: ${MenuAnimation} 0.3s forwards;
  background: rgba(255, 255, 255, 0.5);
  align-items: center;
  flex-direction: column;
  text-align: justify;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }
`;
export const SelectWilayaLIHidden = styled.li`
  min-height: 33%;
  cursor: pointer;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 400;
  padding: 0 30px;
  border-radius: 30px;
`;
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  align-self: end;
  font-size: 20px;
  height: 5%;
`;
