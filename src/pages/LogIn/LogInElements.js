import styled from "styled-components";
import LogInBg from "../../assets/Images/LogIn2.jpg";

export const PageContainer = styled.div`
  background: linear-gradient(rgba(3, 40, 0, 0.9), rgba(3, 40, 0, 0.9)),
    url(${LogInBg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;
export const LoginContainer = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const LoginContainerContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const LoginH1 = styled.h1`
  font-weight: 900;
  letter-spacing: -2px;
  color: #fff;
  align-self: flex-start;
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;
export const LoginP = styled.p`
  color: white;
  padding-left: 5px;
`;
export const HrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LoginHr = styled.hr`
  width: 100%;
  border-color: grey;
  opacity: 0.5;
  height: 2px;
`;
export const HrP = styled.p`
  color: grey;
  margin: 0 10px;
`;
export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const LoginInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #707070;
  margin: 10px 0 20px 0;
  padding: 25px 20px;
  box-sizing: border-box;
`;
export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 900;
  border-radius: 30px;
  width: 100%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
  box-sizing: border-box;
`;
