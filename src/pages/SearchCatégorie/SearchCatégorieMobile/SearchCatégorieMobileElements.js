import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SectionNavContainer = styled.div`
  width: 80%;
  height: 40px;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 20px;
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
    props.currentSection === "General"
      ? "0"
      : props.currentSection === "The_Most_Visted"
      ? "33.33%"
      : "66.66%"};
  transition: left 0.2s ease-in;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 10vh - 40px);
  padding: 20px;
`;
