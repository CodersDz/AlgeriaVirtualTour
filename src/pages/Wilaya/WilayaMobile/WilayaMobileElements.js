import styled from "styled-components";

export const MobilePageContent = styled.div`
  width: 100%;
  height: ${(props) =>
    props.currentSection === "Discover" ? "auto" : "calc(100vh - 110px)"};
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
export const SectionNavContainer = styled.div`
  width: 80%;
  height: 40px;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
`;
export const UlNav = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
`;
export const LiNav = styled.li`
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LiSpan = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.selected ? "#fff" : "#4bcb02")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
export const SlideLiNav = styled.li`
  width: 33.33%;
  border-radius: 30px;
  height: 100%;
  background-color: #4bcb02;
  position: absolute;
  top: 0;
  left: ${(props) =>
    props.currentSection === "Destination"
      ? "0"
      : props.currentSection === "Info"
      ? "33.33%"
      : "66.66%"};
  transition: left 0.2s ease-in;
`;

export const WilayaNameContainerContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WilayaName = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
`;
export const ChangeableContainer = styled.div`
  width: 100%;
  height: ${(props) =>
    props.currentSection === "Discover" ? "auto" : "calc(100% - 10vh - 40px)"};
  padding: 0 20px 10px 20px;
`;
