import styled from "styled-components";

export const ContactPageContainer = styled.div`
  background: rgba(4, 104, 0);
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 3;
  overflow: hidden;
  color: #fff;
`;
export const AboutContentContainer = styled.div`
  height: calc(90vh - 150px);
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AboutContentLeft = styled.div`
  height: 100%;
  width: 50%;
`;
export const AboutContentLeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(4, 60, 0);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 20px;
`;
export const AboutH1 = styled.h1`
  align-self: flex-start;
  font-weight: 700;
  font-size: 48px;
  margin: 35px 0;
`;
export const AboutP = styled.p`
  width: 80%;
  font-size: 1.2rem;
  text-align: start;
`;
export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 48%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const InputSpan = styled.span`
  font-weight: 400;
  font-size: 13px;
`;
export const ContactInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #707070;
  margin: 10px 0 20px 0;
  padding: 25px 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #b7b7b7;
    font-weight: 400;
    font-size: 15px;
  }
`;
export const ContactTextArea = styled.textarea`
  width: 100%;
  resize: none;
  background-color: #ffffff;
  height: 200px;
  border-radius: 26px;
  border: 1px solid #707070;
  margin: 10px 0 20px 0;
  padding: 25px 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #b7b7b7;
    font-weight: 400;
    font-size: 15px;
  }
`;
export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bcb02;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 16px;
  border-radius: 10px;
  width: 40%;
  height: 40px;
  padding: 25px;
  cursor: pointer;
  box-sizing: border-box;
`;
