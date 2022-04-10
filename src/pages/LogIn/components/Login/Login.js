import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { Formik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as FacebookIcone } from "../../../../assets/svg/FacebookIcone.svg";
import { AiOutlineGoogle } from "react-icons/ai";
import {
  LoginContainerContent,
  LoginH1,
  SocialMediaContainer,
  SocialMedia,
  LoginP,
  LoginHr,
  HrP,
  HrContainer,
  FromikContainer,
  LoginForm,
  InputsContainer,
  LoginInput,
  UnderInputsContainer,
  KeepLogContainer,
  KeepLogInput,
  KeepLogLabel,
  ForgottenPwContainer,
  ForgottenPwLink,
  LoginBtn,
  ChangeLogInUpContainer,
  ChangeLogInUpSpan,
  ChangeLogInUpButton,
} from "./LoginElements";
import axios from "axios";
import { generalAPILink } from "../../../../assets/Variables/Links";
import { useNavigate } from "react-router-dom";
import useInfoPopUp from "../../../../hooks/useInfoPopUp";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";

const Login = ({ login, setLogin, toggle, setToggle }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const { setShowInfoPopUp, setType, setText, setShowInfoPopUpAndHide } =
    useInfoPopUp();
  const [checked, setChecked] = useState(false);
  const { setAuthFunction } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <LoginContainerContent
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <LoginH1>{t("AuthentificationPage.Login")}</LoginH1>
      <SocialMediaContainer as={motion.div} layoutId={"socialMedia"}>
        <SocialMedia>
          <FacebookIcone />
          <LoginP>{t("AuthentificationPage.ContinueWFacebook")}</LoginP>
        </SocialMedia>
        <SocialMedia>
          <AiOutlineGoogle size="32" />
          <LoginP>{t("AuthentificationPage.ContinueWGoogle")}</LoginP>
        </SocialMedia>
      </SocialMediaContainer>
      <HrContainer as={motion.div} layoutId={"hr"}>
        <LoginHr />
        <HrP>{t("AuthentificationPage.Or")}</HrP>
        <LoginHr />
      </HrContainer>
      <FromikContainer>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            console.log(errors);
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              axios
                .post(`${generalAPILink}/users/login`, values)
                .then((response) => {
                  console.log(response);
                  const accesToken = response.data?.token;
                  console.log(response.data?.token);
                  setAuthFunction(accesToken, checked);
                  setShowInfoPopUp(false);
                  setType(1);
                  setText("Connection avec succès");
                  setShowInfoPopUpAndHide();
                  navigate(from, { replace: true });
                })
                .catch((err) => {
                  console.log(err);
                  setShowInfoPopUp(false);
                  setType(2);
                  setText(
                    "Erreur ! veuillez vérifier les informations entrés ou réessayer plus tard"
                  );
                  setShowInfoPopUpAndHide();
                });
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <LoginForm onSubmit={handleSubmit}>
              <InputsContainer login={login}>
                <LoginInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("AuthentificationPage.Email")}
                ></LoginInput>
                <LoginInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("AuthentificationPage.Password")}
                ></LoginInput>
              </InputsContainer>

              <UnderInputsContainer>
                <KeepLogContainer>
                  <KeepLogInput
                    id="keepLoggedIn"
                    type="checkbox"
                    onChange={handleChecked}
                  ></KeepLogInput>
                  <KeepLogLabel for="keepLoggedIn">
                    {t("AuthentificationPage.StayConnected")}
                  </KeepLogLabel>
                </KeepLogContainer>
                <ForgottenPwContainer>
                  <ForgottenPwLink to="/Authentification/resetPassword">
                    {t("AuthentificationPage.ForgetPassword")}
                  </ForgottenPwLink>
                </ForgottenPwContainer>
              </UnderInputsContainer>
              <LoginBtn type="submit" disabled={isSubmitting}>
                {t("AuthentificationPage.Login")}
              </LoginBtn>
            </LoginForm>
          )}
        </Formik>
      </FromikContainer>
      <ChangeLogInUpContainer>
        <ChangeLogInUpSpan>
          {t("AuthentificationPage.UdontHaveAccount")}
        </ChangeLogInUpSpan>
        <ChangeLogInUpButton
          onClick={() => {
            setLogin(!login);
            setToggle(!toggle);
          }}
        >
          {t("AuthentificationPage.CreateAccount")}
        </ChangeLogInUpButton>
      </ChangeLogInUpContainer>
    </LoginContainerContent>
  );
};

export default Login;
