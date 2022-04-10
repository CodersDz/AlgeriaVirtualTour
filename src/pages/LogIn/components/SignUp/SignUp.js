import React from "react";
import { Formik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as FacebookIcone } from "../../../../assets/svg/FacebookIcone.svg";
import { ReactComponent as GoogleIcone } from "../../../../assets/svg/GoogleIcone.svg";
import {
  SignUpContainerContent,
  SignUpH1,
  SocialMediaContainer,
  SocialMedia,
  SignUpP,
  LoginHr,
  HrP,
  HrContainer,
  FromikContainer,
  SignUpForm,
  InputsContainer,
  NameNickNameContainer,
  NameNickNameInput,
  SignUpInput,
  SignUpBtn,
  ChangeLogInUpContainer,
  ChangeLogInUpSpan,
  ChangeLogInUpButton,
} from "./SignUpElements";
import { generalAPILink } from "../../../../assets/Variables/Links";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useInfoPopUp from "../../../../hooks/useInfoPopUp";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
import { AiOutlineGoogle } from "react-icons/ai";
const SignUp = ({ login, setLogin, toggle, setToggle }) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const { setShowInfoPopUp, setType, setText, setShowInfoPopUpAndHide } =
    useInfoPopUp();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <SignUpContainerContent
      key={"SignUpContainer"}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <SignUpH1>{t("AuthentificationPage.Signup")}</SignUpH1>

      <FromikContainer>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            email: "",
            phone_number: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (values.password !== values.password) {
              errors.password = "le mot de passe doit être le même ";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              axios
                .post(`${generalAPILink}/users/signup`, {
                  email: values.email,
                  password: values.password,
                  phone_number: values.phone_number,
                  name: values.name,
                  lastname: values.lastname,
                })
                .then((response) => {
                  console.log(response);
                  setShowInfoPopUp(false);
                  setType(1);
                  setText("Inscription avec succès");
                  setShowInfoPopUpAndHide();
                  navigate("/Authentification/EmailConfirmation", {
                    state: {
                      from: location,
                      confirmation: true,
                      email: response?.data?.data?.email,
                    },
                  });
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
            <SignUpForm onSubmit={handleSubmit}>
              <InputsContainer>
                <NameNickNameContainer>
                  <NameNickNameInput
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("AuthentificationPage.Name")}
                  ></NameNickNameInput>
                  <NameNickNameInput
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("AuthentificationPage.LastName")}
                  ></NameNickNameInput>
                </NameNickNameContainer>
                <SignUpInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("AuthentificationPage.Email")}
                ></SignUpInput>
                <SignUpInput
                  type="tel"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("AuthentificationPage.Tel")}
                ></SignUpInput>
                <SignUpInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("AuthentificationPage.Password")}
                ></SignUpInput>

                <SignUpInput
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("AuthentificationPage.ConfirmPassword")}
                ></SignUpInput>
              </InputsContainer>
              <SignUpBtn type="submit" disabled={isSubmitting}>
                {t("AuthentificationPage.Signup")}
              </SignUpBtn>
            </SignUpForm>
          )}
        </Formik>
      </FromikContainer>
      <HrContainer as={motion.div} layoutId={"hr"}>
        <LoginHr />
        <HrP>{t("AuthentificationPage.Or")}</HrP>
        <LoginHr />
      </HrContainer>
      <SocialMediaContainer as={motion.div} layoutId={"socialMedia"}>
        <SocialMedia>
          <FacebookIcone />
          <SignUpP>{t("AuthentificationPage.ContinueWFacebook")}</SignUpP>
        </SocialMedia>
        <SocialMedia>
          <AiOutlineGoogle size="32" />
          <SignUpP>{t("AuthentificationPage.ContinueWGoogle")}</SignUpP>
        </SocialMedia>
      </SocialMediaContainer>

      <ChangeLogInUpContainer>
        <ChangeLogInUpSpan>
          {t("AuthentificationPage.UHaveAccount")}
        </ChangeLogInUpSpan>
        <ChangeLogInUpButton
          onClick={() => {
            setLogin(!login);
            setToggle(!toggle);
          }}
        >
          {t("AuthentificationPage.Login")}
        </ChangeLogInUpButton>
      </ChangeLogInUpContainer>
    </SignUpContainerContent>
  );
};

export default SignUp;
