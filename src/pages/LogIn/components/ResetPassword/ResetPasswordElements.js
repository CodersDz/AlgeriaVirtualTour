import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  height: 20%;
  flex-grow: 1;
`;
export const P = styled.p`
  font-size: 20px;
  font-weight: 400;
  flex-grow: 1;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-grow: 2;
`;
export const LoginInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #707070;
  margin-top: 0;
  padding: 15px;
  box-sizing: border-box;
  &:outline {
    border: none;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 900;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;
