import styled from "styled-components";

export const LocationCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  min-width: 20%;
  max-width: 20%;
  max-height: 100%;
  margin-right: 5vw;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 20px;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 60%;
  border: 1px solid transparent;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 8px 8px 8px #ccc;
`;
export const CardText = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LocationName = styled.h4`
  color: #109fb2;
  align-self: flex-start;
  text-align: start;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const LocationP = styled.p`
  color: #a8a8a8;
  text-align: start;
  font-size: 14px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const CardBtnContainer = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftCardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
