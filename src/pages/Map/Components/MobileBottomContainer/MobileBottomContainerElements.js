import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: ${(props) =>
    props.showHidden ? "translateY(0)" : "translateY(25vh)"};
  transition: transform 0.2s ease-in-out;
`;
export const ZoomContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
export const ZoomWrapper = styled.div`
  width: 90%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const ZoomLeftContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ZoomSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`;
export const ZoomRightContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RangeInput = styled.input`
  width: 100%;
  cursor: pointer;
  background-color: #9a905d;
  &::-webkit-slider-thumb {
    background: green;
  }
`;
export const HiddenContainer = styled.div`
  width: 100%;
  height: calc(25vh + 25px);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;
export const BarContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
`;
export const Bar = styled.div`
  width: 30%;
  height: 25%;
  background-color: #fff;
  border-radius: 20px;
`;
export const LocationsContainer = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  width: 100%;
  height: 25vh;
  /* opacity: ${(props) => (props.showHidden ? 1 : 0)};
  transition: opacity 0.2s ease-in-out; */
`;
