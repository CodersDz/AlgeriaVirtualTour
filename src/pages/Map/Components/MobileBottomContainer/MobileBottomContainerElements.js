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
    props.showHidden ? "translateY(0)" : "translateY(35vh)"};
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
  accent-color: #4bcb02;
`;
export const HiddenContainer = styled.div`
  width: 100%;
  height: calc(35vh + 25px);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`;
export const BarContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Bar = styled.div`
  width: 30%;
  height: 25%;
  background-color: #fff;
  border-radius: 20px;
`;
export const LocationsContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-right: 0;
`;
export const LocationCard = styled.div`
  background-color: #eaeaea;
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 5px;
  cursor: pointer;
`;
export const LocationImageContainer = styled.div`
  height: 50%;
  min-height: 50%;
  width: 100%;
`;
export const LocationImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const LocationInformationsContainer = styled.div`
  height: 50%;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const LocationTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #399c00;
  width: 100%;
  text-transform: uppercase;
`;
export const LocationP = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #a1a1a1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
`;
export const BtnContainer = styled.div`
  height: 10%;
  width: 100%;
`;
export const NoLocationMessage = styled.span`
  font-size: 15px;
  color: #fff;
`;
