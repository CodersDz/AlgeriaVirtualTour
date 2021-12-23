import styled from "styled-components";

export const SignUpContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const SignUpH1 = styled.h1`
  height: 10%;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -1px;
  color: #fff;
  align-self: center;
  display: flex;
  align-items: center;
`;
export const SocialMediaContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const SignUpP = styled.p`
  color: white;
  font-size: 12px;
  margin-left: 10px;
  font-weight: 400;
`;
export const HrContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LoginHr = styled.hr`
  width: 100%;
  border-color: #fff;
  opacity: 0.5;
`;
export const HrP = styled.p`
  color: grey;
  font-size: 13px;
  margin: 0 15px;
`;
export const FromikContainer = styled.div`
  width: 100%;
  height: 60%;
  margin: auto;
`;
export const SignUpForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const InputsContainer = styled.div`
  width: 100%;
  height: ${({ login }) => (login ? "70%" : "85%")};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
`;
export const SignUpInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #707070;
  margin-top: 0;
  padding: 15px;
  box-sizing: border-box;
`;
export const NameNickNameContainer = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #4bcb02;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NameNickNameInput = styled(SignUpInput)`
  width: 48%;
  margin: 0;
`;
export const SignUpBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 900;
  border-radius: 30px;
  width: 100%;
  height: 15%;
  cursor: pointer;
`;
export const ChangeLogInUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 10%;
`;
export const ChangeLogInUpSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`;
export const ChangeLogInUpButton = styled.button`
  font-size: 15px;
  font-weight: 400;
  color: #4bcb02;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
