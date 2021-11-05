import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  z-index: 1;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const ReadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 1.3rem;
  border-radius: 30px;
  width: 40%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
`;
