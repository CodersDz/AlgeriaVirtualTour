import styled, { keyframes } from "styled-components";
import { ReactComponent as ArrowSvg } from "../../../../assets/svg/arrow.svg";
const MenuAnimation = keyframes`
from {
  height:0px;
}

to {
  height:150px;
}
`;
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
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  color: #fff;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow-y: visible;
`;
export const SelectWilayaVisible = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WilayaSelectedH3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;
export const Arrow = styled(ArrowSvg)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  ${SelectWilayaContainer}:hover & {
    transform: rotate(-540deg);
  }
`;
export const SelectWilayaUlHidden = styled.ul`
  display: ${(props) => (props.showWilayas === false ? "none" : "flex")};
  background: rgba(255, 255, 255, 0);
  width: 100%;
  max-height: 300px;
  animation: ${MenuAnimation} 0.3s forwards;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 60px;
  z-index: 2;
  text-align: justify;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
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
