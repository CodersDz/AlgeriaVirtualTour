import React from "react";
import { Formik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as FacebookIcone } from "../../../../assets/svg/FacebookIcone.svg";
import { ReactComponent as TwitterIcone } from "../../../../assets/svg/TwitterIcone.svg";
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
const Login = ({ login, setLogin, toggle, setToggle }) => {
  return (
    <LoginContainerContent
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <LoginH1>Se Connecter</LoginH1>
      <SocialMediaContainer as={motion.div} layoutId={"socialMedia"}>
        <SocialMedia>
          <FacebookIcone />
          <LoginP>Continuer avec facebook</LoginP>
        </SocialMedia>
        <SocialMedia>
          <TwitterIcone />
          <LoginP>Continuer avec twitter</LoginP>
        </SocialMedia>
      </SocialMediaContainer>
      <HrContainer as={motion.div} layoutId={"hr"}>
        <LoginHr />
        <HrP>Ou</HrP>
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
                .post(
                  "https://www.algeriavirtualtour.com/api/users/login",
                  values
                )
                .then((response) => {
                  console.log(response);
                })
                .catch((err) => {
                  console.log(err);
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
                  placeholder="Email..."
                ></LoginInput>
                <LoginInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mot de passe..."
                ></LoginInput>
              </InputsContainer>

              <UnderInputsContainer>
                <KeepLogContainer>
                  <KeepLogInput
                    id="keepLoggedIn"
                    type="checkbox"
                  ></KeepLogInput>
                  <KeepLogLabel for="keepLoggedIn">
                    Rester connecter
                  </KeepLogLabel>
                </KeepLogContainer>
                <ForgottenPwContainer>
                  <ForgottenPwLink to="/">Mot de passe oublié?</ForgottenPwLink>
                </ForgottenPwContainer>
              </UnderInputsContainer>
              <LoginBtn type="submit" disabled={isSubmitting}>
                Se connecter
              </LoginBtn>
            </LoginForm>
          )}
        </Formik>
      </FromikContainer>
      <ChangeLogInUpContainer>
        <ChangeLogInUpSpan>Vous avez pas de compte?</ChangeLogInUpSpan>
        <ChangeLogInUpButton
          onClick={() => {
            setLogin(!login);
            setToggle(!toggle);
          }}
        >
          Créer un compte
        </ChangeLogInUpButton>
      </ChangeLogInUpContainer>
    </LoginContainerContent>
  );
};

export default Login;
