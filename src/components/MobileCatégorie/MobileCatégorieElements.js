import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftContainer = styled.div`
  height: 100%;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RightContainer = styled.div`
  width: 80%;
  height: 100%;
  background: ${(props) =>
    `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),url(${props.bg})})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 0 0 0 50px;
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const CatégorieName = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 5px;
`;
export const IconeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const CatégorieIcone = styled.img`
  width: 100%;
  height: 100%;
`;
