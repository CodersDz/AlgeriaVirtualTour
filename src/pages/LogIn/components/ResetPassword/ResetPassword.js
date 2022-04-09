import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generalAPILink } from "../../../../assets/Variables/Links";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
import {
  Container,
  Title,
  P,
  Form,
  LoginInput,
  Button,
} from "./ResetPasswordElements";
const ResetPassword = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState();
  const inputHandler = (e) => {
    setEmail(e.target.value);
  };
  const sendRequest = (e) => {
    e.preventDefault();
    axios
      .post(`${generalAPILink}/users/resetPassword`, { email: email })
      .then((response) => {
        console.log(response);
        navigate("/Authentification/EmailConfirmation", {
          state: {
            from: location,
            confirmation: true,
            email: email,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Title>{t("AuthentificationPage.ResetPasswordTitle")}</Title>
      <P>{t("AuthentificationPage.ResetPasswordP")}</P>
      <Form onSubmit={sendRequest}>
        <LoginInput
          placeholder={t("AuthentificationPage.Email")}
          onChange={inputHandler}
          value={email}
        />
        <Button type="submit">{t("AuthentificationPage.Send")}</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
